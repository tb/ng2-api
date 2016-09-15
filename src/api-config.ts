import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ApiConfig {
  baseUrl: string;
  contentType: string;
  tokenName: string;
  authHeaderName: string;
  authHeaderPrefix: string;
  requestOptions: RequestOptions;

  constructor(config?: any) {
    this.baseUrl = config.baseUrl || '';
    this.contentType = config.contentType || 'application/json';
    this.tokenName = config.tokenName || 'token';
    this.authHeaderName = config.authHeaderName || 'Authorization';
    this.authHeaderPrefix = config.authHeaderPrefix || 'Bearer';

    let headers: Headers = new Headers();
    headers.set('Content-Type', this.contentType);
    headers.set(this.authHeaderName, `${this.authHeaderPrefix} ${this.token}`);
    this.requestOptions = new RequestOptions({headers});
  }

  get token(): string {
    return localStorage.getItem(this.tokenName);
  }

  set token(token: string) {
    this.requestOptions.headers.set(this.authHeaderName, `${this.authHeaderPrefix} ${token}`);
    localStorage.setItem(this.tokenName, token);
  }
}
