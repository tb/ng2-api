import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';

import {Post, PostsService} from './posts-service';

@Component({
  selector: 'posts-index',
  templateUrl: 'posts-edit.html',
  styles: [],
  providers: [PostsService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class PostsEdit {
  post: Post;

  constructor(public postsService: PostsService,
              public router: Router) {
  }
}
