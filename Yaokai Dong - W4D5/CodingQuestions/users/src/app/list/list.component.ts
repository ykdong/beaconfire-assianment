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
  }
}
