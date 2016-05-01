import { Http, Response, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
export declare class ApiService<T> {
    protected http: Http;
    protected apiUrl: string;
    protected path: string;
    constructor(http: Http, apiUrl: string, path: string);
    url(url: string): string;
    requestOptions(): RequestOptions;
    serialize(model: T): string;
    deserialize(res: Response): T | T[];
    find(id: number | string): Observable<T>;
    findAll(search?: any): Observable<T[]>;
    create(model: T): Observable<T>;
    update(model: T): Observable<T>;
    delete(model: T): Observable<boolean>;
}
