# ng2-api

Angular2 API services, see [ng2-api-examples](https://github.com/tb/ng2-api-examples)

## Install

    npm i --save ng2-api

## Import

    import {ApiService} from 'ng2-api';

## Usage

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
      constructor(public http: Http) {
        super(http, 'http://localhost:8081', 'posts');
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
