import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../service/users.service';

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
    let newName = this.fBuilder.getRawValue().name;
    if (typeof newName === 'string') {
      this.UsersService.onNewUser(newName);
    }
  }
}
