import {Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ApiHelpers} from './api-helpers';
import {ApiHttp} from './api-http';

export class ApiService<T> {
  config: any;

  constructor(protected http: ApiHttp,
              protected path: string,
              config: any = {}) {
    this.config = config;
  }

  serialize(model: T): string {
    if (this.config.objectRoot) {
      return JSON.stringify({[this.config.objectRoot]: model});
    } else {
      return JSON.stringify(model);
    }
  }

  deserialize(data: any): T {
    return <T>(this.config.objectRoot ? data[this.config.objectRoot]||data : data);
  }

  extractArray(data: any): any {
    return (this.config.arrayRoot ? data[this.config.arrayRoot] : data);
  }

  find(id: number|string): Observable<T> {
    let requestOptions = new RequestOptions({body: ''});

    return this.http.get(
      ApiHelpers.interpolate(`${this.path}/:id`, {id}),
      requestOptions
    ).map((res: Response) => this.deserialize(res.json()));
  }

  findAll(search?: any): Observable<T[]> {
    let interpolatedPath = ApiHelpers.interpolate(this.path, search, true);
    let requestOptions = new RequestOptions({
      body: '',
      search: ApiHelpers.toSearch(search)
    });

    return this.http.get(
      interpolatedPath,
      requestOptions
    ).map((res: Response) => {
      return this.extractArray(res.json()).map((item: any) => {
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
    let requestOptions = new RequestOptions({body: ''});

    return this.http.delete(
      ApiHelpers.interpolate(`${this.path}/:id`, model),
      requestOptions
    ).map((res: Response) => res.ok);
  }
}
