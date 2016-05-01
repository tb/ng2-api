//our root app component
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {PostsIndex} from './components/posts/posts-index';
import {PostsEdit} from './components/posts/posts-edit';

@Component({
  selector: 'my-app',
  providers: [FORM_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  styles: [],
  templateUrl: '/demo/app.html'
})
@RouteConfig([
  {path: '/posts', component: PostsIndex, name: 'PostsIndex', useAsDefault: true},
  {path: '/posts/:id', component: PostsEdit, name: 'PostsEdit'}
])
export class App {
  constructor() {}
}