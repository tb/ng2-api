import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ApiHelpers} from './api-helpers';

export class ApiService<T> {
  constructor(protected http: Http,
              protected apiUrl: string,
              protected path: string) {
  }

  url(path: string, params: any = {}): string {
    let interpolatedPath = ApiHelpers.interpolate(path, params);
    return `${this.apiUrl}/${interpolatedPath}`;
  }

  requestOptions(): RequestOptions {
    let headers: Headers = new Headers();
    headers.set('Content-Type', 'application/json');

    return new RequestOptions({headers});
  }

  serialize(model: T): string {
    return JSON.stringify(model);
  }

  deserialize(res: Response): T|T[] {
    let data = res.json();
    if (data && Array === data.constructor) {
      return data.map((item: any) => <T>item);
    } else {
      return <T>data;
    }
  }

  find(id: number|string): Observable<T> {
    return this.http.get(
      this.url(`${this.path}/:id`, {id}),
      this.requestOptions()
    ).map(this.deserialize);
  }

  findAll(search?: any): Observable<T[]> {
    let interpolatedPath = ApiHelpers.interpolate(this.path, search, true);
    let requestOptions = new RequestOptions({
      search: ApiHelpers.toSearch(search)
    });

    return this.http.get(
      this.url(interpolatedPath),
      this.requestOptions().merge(requestOptions)
    ).map(this.deserialize);
  }

  create(model: T): Observable<T> {
    return this.http.post(
      this.url(this.path),
      this.serialize(model),
      this.requestOptions()
    ).map(this.deserialize);
  }

  update(model: T): Observable<T> {
    return this.http.put(
      this.url(`${this.path}/:id`, model),
      this.serialize(model),
      this.requestOptions()
    ).map(this.deserialize);
  }

  delete(model: T): Observable<boolean> {
    return this.http.delete(
      this.url(`${this.path}/:id`, model),
      this.requestOptions()
    ).map((res: Response) => res.ok);
  }
}
