import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private UsersService: UsersService) {}
  ngOnInit(): void { }
  fBuilder = new FormBuilder().group({
    name: ['', Validators.required]
  })
  onClick() {
    const user: User = {...this.fBuilder.getRawValue()}
    if (typeof user.name === 'string') {
      this.UsersService.onNewUser(user);
    }
  }
}
