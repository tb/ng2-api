import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ApiHelpers} from './api-helpers';
import {ApiConfig} from './api-config';

@Injectable()
export class ApiHttp {
  constructor(public config: ApiConfig,
              private http: Http) {
  }

  url(path: string, params: any = {}): string {
    let interpolatedPath = ApiHelpers.interpolate(path, params);
    return `${this.config.baseUrl}/${interpolatedPath}`;
  }

  requestOptions(options?: RequestOptions): RequestOptions {
    return this.config.requestOptions.merge(options);
  }

  get(url: string, options?: RequestOptions): Observable<Response> {
    return this.http.get(this.url(url), this.requestOptions(options));
  }

  post(url: string, body: string, options?: RequestOptions): Observable<Response> {
    return this.http.post(this.url(url), body, this.requestOptions(options));
  }

  put(url: string, body: string, options?: RequestOptions): Observable<Response> {
    return this.http.put(this.url(url), body, this.requestOptions(options));
  }

  patch(url: string, body: string, options?: RequestOptions): Observable<Response> {
    return this.http.patch(this.url(url), body, this.requestOptions(options));
  }

  delete(url: string, options?: RequestOptions): Observable<Response> {
    return this.http.delete(this.url(url), this.requestOptions(options));
  }
}
