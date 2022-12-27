import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    // invoke user service to fetch data
    // return type is Observable, we will subscribe to it and display the data 
    // on route /users
    this.usersService
    .getData()
    .subscribe((users: any) => this.usersService.users = users);

    this.usersService
    .onSubscribe()
    .subscribe((user: string) => this.usersService.users.push(user));
  }
}
