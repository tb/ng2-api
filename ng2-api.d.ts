import { Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/Observable/ErrorObservable';
export declare class Api {
    get(url: string, params: any): Observable<Response>;
    put(url: string, params: any, data: any): Observable<Response>;
    post(url: string, params: any, data: any): Observable<Response>;
    delete(url: string, params: any, data: any): Observable<Response>;
}
export declare class ApiResource<T> {
    api: Api;
    protected path: string;
    constructor(api: Api, path: string);
    findAll(): Observable<T[]>;
    find(id: number | string): Observable<T>;
    update(id: number | string, model: T): Observable<T>;
    create(model: T): Observable<T>;
    delete(id: number | string): Observable<T>;
    processResponse(observable: Observable<Response>): Observable<T | T[]>;
    serialize(model: T): string;
    deserialize(res: any): T;
    protected processSuccessResponse(res: Response): T | T[];
    protected processErrorResponse(error: Response): ErrorObservable;
}
