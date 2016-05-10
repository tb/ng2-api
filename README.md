# ng2-api

Angular2 API services that wrap [Http](https://angular.io/docs/ts/latest/api/http/index/Http-class.html).
See full client and server example [ng2-api-examples](https://github.com/tb/ng2-api-examples)

## Install

    npm i --save ng2-api

## Usage

### auth.service.ts

    import {provide, Injectable, NgZone} from '@angular/core';
    import {Http, Response} from '@angular/http';
    import {Router} from '@angular/router-deprecated';
    import {ApiConfig, ApiHttp} from 'ng2-api';
    
    export function authenticated(): boolean {
      return !!localStorage.getItem('token');
    }
    
    @Injectable()
    export class Auth {
      user: Object;
    
      constructor(protected http: ApiHttp,
                  protected zone: NgZone,
                  protected router: Router) {
        this.user = JSON.parse(localStorage.getItem('profile'));
      }
    
      authenticated() {
        return authenticated();
      }
    
      login(params: any) {
        return this.http.post('login', JSON.stringify(params))
          .subscribe((res: Response) => {
            let {token, user} = res.json();
            localStorage.setItem('profile', JSON.stringify(user));
            localStorage.setItem('token', token);
            this.zone.run(() => this.user = user);
            this.router.navigate(['/Dashboard']);
          });
      }
    
      logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('token');
        this.zone.run(() => this.user = null);
        this.router.navigate(['/Login']);
      }
    }
    
    export const AUTH_PROVIDERS: any = [
      provide(ApiHttp, {
        useFactory: (http: Http) => {
          return new ApiHttp(new ApiConfig({baseUrl: 'http://localhost:8081'}), http);
        },
        deps: [Http]
      }),
      Auth
    ];

### bootstrap.ts

    bootstrap(App, [
      ...HTTP_PROVIDERS,
      ...ROUTER_PROVIDERS,
      ...AUTH_PROVIDERS
    ])

### posts.service.ts

    import {Injectable} from '@angular/core';
    import {Http} from '@angular/http';
    import {ApiService} from 'ng2-api';
    
    export interface Post {
      id: number;
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

### Tests

    npm i
    npm run build
    npm run test:w

## License

MIT
