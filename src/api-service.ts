import {Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ApiHelpers} from './api-helpers';
import {ApiHttp} from './api-http';

export class ApiService<T> {
  constructor(protected http: ApiHttp,
              protected path: string) {
  }

  serialize(model: T): string {
    return JSON.stringify(model);
  }

  deserialize(data: any): T {
    return <T>data;
  }

  find(id: number|string): Observable<T> {
    return this.http.get(
      ApiHelpers.interpolate(`${this.path}/:id`, {id})
    ).map((res: Response) => this.deserialize(res.json()));
  }

  findAll(search?: any): Observable<T[]> {
    let interpolatedPath = ApiHelpers.interpolate(this.path, search, true);
    let requestOptions = new RequestOptions({search: ApiHelpers.toSearch(search)});

    return this.http.get(
      interpolatedPath,
      requestOptions
    ).map((res: Response) => {
      return res.json().map((item: any) => {
        return this.deserialize(item);
      });
    });
  }

  create(model: T): Observable<T> {
    return this.http.post(this.path, this.serialize(model))
      .map((res: Response) => this.deserialize(res.json()));
  }

  update(model: T): Observable<T> {
    return this.http.put(
      ApiHelpers.interpolate(`${this.path}/:id`, model),
      this.serialize(model)
    ).map((res: Response) => this.deserialize(res.json()));
  }

  delete(model: T): Observable<boolean> {
    return this.http.delete(
      ApiHelpers.interpolate(`${this.path}/:id`, model)
    ).map((res: Response) => res.ok);
  }
}
