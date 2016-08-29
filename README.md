# ng2-api

Angular2 API services that wrap [Http](https://angular.io/docs/ts/latest/api/http/index/Http-class.html).
See full client and server example [ng2-api-examples](https://github.com/tb/ng2-api-examples)

## Install

    npm i --save ng2-api

## Usage

### auth.guard.ts

    import { Injectable } from '@angular/core';
    import { CanActivate, Router } from '@angular/router';
    
    export function authenticated(): boolean {
      return !!localStorage.getItem('token');
    }
    
    @Injectable()
    export class AuthGuard implements CanActivate {
      constructor(private router: Router) {}
    
      canActivate() {
        if (authenticated()) { return true; }
    
        // Navigate to the login page
        this.router.navigate(['/login']);
        return false;
      }
    }

### auth.service.ts

    import { Injectable } from '@angular/core';
    import { Router } from '@angular/router';
    import { ApiHttp } from 'ng2-api';
    import { authenticated } from './auth.guard';
    
    @Injectable()
    export class AuthService {
      user: Object;
      authenticated: boolean = authenticated();
    
      constructor(protected http: ApiHttp,
                  protected router: Router) {
        try {
          this.user = JSON.parse(localStorage.getItem('profile'));
        } catch(e) {
          this.user = {};
        }
      }
    
      login(params: any) {
        return this.http.post('login', JSON.stringify(params))
          .subscribe((res: Response) => {
            let {token, user} = res.json();
            let {token, user} = {token: 'abc', user: params};
            localStorage.setItem('profile', JSON.stringify(user));
            localStorage.setItem('token', token);
            this.authenticated = true;
            this.user = user;
            this.router.navigate(['/admin/posts']);
          });
      }
    
      logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('token');
        this.authenticated = false;
        this.user = null;
        this.router.navigate(['/login']);
      }
    }


### app.module.ts

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { HttpModule, Http } from '@angular/http';
    import { FormsModule } from '@angular/forms';
    import { ApiConfig, ApiHttp } from './ng2-api';
    
    import { AppComponent } from './app.component';
    import { AuthService } from './shared/auth.service';
    import { PostsComponent } from './posts/posts.component';
    import { PostsService } from './posts/posts.service';
    import { routing } from './app.routing';
    
    @NgModule({
      imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
      ],
      declarations: [
        AppComponent,
        PostsComponent,
      ],
      providers: [
        {
          provide: ApiHttp,
          useFactory: (http: Http) => new ApiHttp(new ApiConfig({baseUrl: '/api'}), http),
          deps: [Http]
        },
        AuthService,
        PostsService,
      ],
      bootstrap: [AppComponent]
    })
    export class AppModule {}

### posts.service.ts

    import { Injectable } from '@angular/core';
    import { ApiService } from 'ng2-api';
    
    export interface Post {
      id?: number;
      title: string;
      body: string;
    }
    
    @Injectable()
    export class PostsService extends ApiService<Post> {
      constructor(protected http: ApiHttp) {
        super(http, 'posts');
      }
    }

### ApiService methods

    find(id: number | string): Observable<Post>
    findAll(search?: any): Observable<Post[]>
    create(model: Post): Observable<Post>
    update(model: Post): Observable<Post>
    delete(model: Post): Observable<boolean>

### ApiService customization

You can customize resource path and provide optional config to `super()`.

If need, you can also overwrite ApiService public (i.e. `update`) and private methods (i.e. `serialize`, `deserialize`)

Example:

    @Injectable()
    export class PostsService extends ApiService<Post> {
      constructor(protected http: ApiHttp) {
        super(http, 'posts', { 
          arrayRoot: 'posts',
          objectRoot: 'post'
        });
      }
    }

### Tests

    npm i
    npm run build
    npm run test:w

## License

MIT
