import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // inject users services into this component 
  constructor(public usersService: UsersService) {}
  ngOnInit(): void {
    // invoke user service to fetch data
    // return type is Observable, we will subscribe to it and display the data 
    // on route /users
    this.usersService
    .getData()
    .subscribe((users: any) => this.usersService.users = users);
  }
}
