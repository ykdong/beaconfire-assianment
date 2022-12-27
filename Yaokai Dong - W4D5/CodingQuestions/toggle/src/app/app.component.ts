import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  languages: string[] = ['javascript', 'java'];
  current: string = this.languages[0];
  path: string = `../assets/${this.current}.png`;
}
