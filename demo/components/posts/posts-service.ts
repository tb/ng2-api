import {Inject, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
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
