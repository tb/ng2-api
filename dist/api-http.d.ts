import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiConfig } from './api-config';
export declare class ApiHttp {
    config: ApiConfig;
    private http;
    constructor(config: ApiConfig, http: Http);
    url(path: string, params?: any): string;
    requestOptions(options?: RequestOptions): RequestOptions;
    get(url: string, options?: RequestOptions): Observable<Response>;
    post(url: string, body: string, options?: RequestOptions): Observable<Response>;
    put(url: string, body: string, options?: RequestOptions): Observable<Response>;
    patch(url: string, body: string, options?: RequestOptions): Observable<Response>;
    delete(url: string, options?: RequestOptions): Observable<Response>;
}
