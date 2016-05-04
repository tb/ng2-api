# ng2-api

Angular2 API services - work in progress

## Install

    npm i --save ng2-api

## Import

    import {ApiService} from 'ng2-api';

## Usage

    import {Inject, Injectable} from '@angular/core';
    import {Http, Response} from '@angular/http';
    import {ApiService} from 'ng2-api';
    
    export interface Post {
      id: number;
      title: string;
      body: string;
    }
    
    @Injectable()
    export class PostsService extends ApiService<Post> {
      constructor(public http: Http) {
        super(http, 'http://jsonplaceholder.typicode.com', 'posts');
      }
    
      serialize(model: Post): string {
        return JSON.stringify({post: model});
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
