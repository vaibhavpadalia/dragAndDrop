import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  url = 'http://localhost:8888/api/v1/';
  constructor(private http: Http) { }

  getDetails() {
    return this.http.get(this.url + 'getDetails');
  }

  createUser(email: string, name: string) {
    return this.http.post(this.url + 'createUser',
    {email: email, name: name});
  }

}
