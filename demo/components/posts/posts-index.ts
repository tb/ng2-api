import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';

import {Post, PostsService} from './posts-service';

@Component({
  selector: 'posts-index',
  templateUrl: '/demo/components/posts/posts-index.html',
  styles: [],
  providers: [PostsService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class PostsIndex {
  posts: Post[] = [];

  constructor(public postsService: PostsService,
              public router: Router) {
  }

  ngOnInit() {
    this.postsService.findAll()
      .subscribe((posts: Post[]) => {
        console.log(posts)
        this.posts = posts
      });
  }
}
