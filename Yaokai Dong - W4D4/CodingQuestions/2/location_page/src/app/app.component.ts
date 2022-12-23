import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'location_page';
  constructor() {}
  city: string = 'london';
  changeCity(city: string) {
    this.city = city;
  }
}
