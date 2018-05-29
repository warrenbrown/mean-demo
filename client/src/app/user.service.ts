import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  users: any;
  user: {};
  selectedUser = {};

  private domain = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.domain + '/users');
  }

  saveUser(user) {
    return this.http.post(this.domain + '/user', user);
  }

}
