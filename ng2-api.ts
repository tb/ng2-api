import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/Observable/ErrorObservable';

@Injectable()
export class Api {
  // WIP
  get(url: string, params: any): Observable<Response> {
    return new Observable<Response>();
  }
  put(url: string, params: any, data: any): Observable<Response> {
    return new Observable<Response>();
  }
  post(url: string, params: any, data: any): Observable<Response> {
    return new Observable<Response>();
  }
  delete(url: string, params: any, data: any): Observable<Response> {
    return new Observable<Response>();
  }
}

export class ApiResource<T> {
  constructor(public api: Api,
              protected path: string) {}

  findAll(): Observable<T[]> {
    return this.processResponse(
      this.api.get(`${this.path}`, {})
    );
  }

  find(id: number|string): Observable<T> {
    return this.processResponse(
      this.api.get(`${this.path}/:id`, {id})
    );
  }

  update(id: number|string, model: T): Observable<T> {
    return this.processResponse(
      this.api.put(`${this.path}/:id`, {id}, model)
    );
  }

  create(model: T): Observable<T> {
    return this.processResponse(
      this.api.post(`${this.path}`, {}, model)
    );
  }

  delete(id: number|string): Observable<T> {
    return this.processResponse(
      this.api.delete(`${this.path}/:id`, {id}, {})
    );
  }

  processResponse(observable: Observable<Response>) {
    return observable
      .map((res: Response) => this.processSuccessResponse(res))
      .catch(this.processErrorResponse);
  }

  serialize(model: T): string {
    return JSON.stringify(model);
  }

  deserialize(res: any): T {
    return <T>res;
  }

  protected processSuccessResponse(res: Response): T|T[] {
    let data = res.json();
    if (data && Array === data.constructor) {
      return data.map((entry) => this.deserialize(entry));
    } else {
      return this.deserialize(data);
    }
  }

  protected processErrorResponse(error: Response): ErrorObservable {
    return Observable.throw(new Error(error.json().join() || 'Server error'));
  }
}
