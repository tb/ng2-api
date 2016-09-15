import { TestBed, inject, async } from '@angular/core/testing';
import { XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { ApiConfig, ApiHttp, ApiService } from '../src';

import { Injectable } from '@angular/core';

export interface User {
  id?: string;
  name?: string;
}

@Injectable()
export class UsersService extends ApiService<User> {
  constructor(protected http: ApiHttp) {
    super(http, 'users', {
      arrayRoot: 'users',
      objectRoot: 'user'
    });
  }
}

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend},
        {
          provide: ApiHttp,
          useFactory: (http: Http) => new ApiHttp(new ApiConfig({baseUrl: '/api'}), http),
          deps: [ Http ]
        },
        UsersService,
      ]
    });
  });

  it('should findAll users', async(
    inject([UsersService, XHRBackend], (usersService: UsersService, backend: MockBackend) => {
      backend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url).toEqual('/api/users');
        expect(connection.request.method).toEqual(RequestMethod.Get);
        connection.mockRespond(new Response(new ResponseOptions({body: '{"users": [{"id": 1, "name": "Tom"}]}'})));
      });

      usersService.findAll().subscribe((users: User[]) => {
        expect(users).toEqual([{id: 1, name: 'Tom'}])
      });
    }))
  );

  it('should find user with id 1', async(
    inject([UsersService, XHRBackend], (usersService: UsersService, backend: MockBackend) => {
      backend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url).toEqual('/api/users/1');
        expect(connection.request.method).toEqual(RequestMethod.Get);
        connection.mockRespond(new Response(new ResponseOptions({body: '{"user": {"id": 1, "name": "Tom"}}'})));
      });

      usersService.find(1).subscribe((user: User) => {
        expect(user).toEqual({id: 1, name: 'Tom'})
      });
    }))
  );
});
