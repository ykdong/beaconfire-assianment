import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../interface/user';

// inject this services into root global app scope, thus any component or service could use this service
@Injectable({ providedIn: 'root' }) 
export class UsersService {

  // import http module for later use
  constructor(private http: HttpClient) { }

  // this service method will be run on main app init stage
  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // create a new Subject for get data from provided url and distribute data to different components in this app
  subject = new Subject();

  // create a temp front end data base like array to store all the data fetched from provided url
  // we don't know the data type yet, use 'any' data type would be suitable here
  users: any[] = [];

  // create a method to return the observable when other components subscribes on this service
  onSubscribe(): Observable<any> {
    return this.subject.asObservable();
  }

  // create a method to emit the value in the Observable Stream
  onNewUser(user: User): void {
    // 'next' will describe the next emitted value in the Observable Stream
    this.subject.next(user);
  }
}
