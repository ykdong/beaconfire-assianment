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
    this.usersService
      .onSubscribe()
      .subscribe((user: string) => this.usersService.users.push(user));
  }
}
