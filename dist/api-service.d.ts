import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ApiHttp } from './api-http';
export declare class ApiService<T> {
    protected http: ApiHttp;
    protected path: string;
    config: any;
    constructor(http: ApiHttp, path: string, config?: any);
    serialize(model: T): string;
    deserialize(data: any): T;
    extractArray(data: any): any;
    find(id: number | string): Observable<T>;
    findAll(search?: any): Observable<T[]>;
    create(model: T): Observable<T>;
    update(model: T): Observable<T>;
    delete(model: T): Observable<boolean>;
}
