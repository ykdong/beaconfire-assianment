import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // pass current language data from parent to child
  @Input() current: string = 'javascript';
  @Output() currentChange = new EventEmitter();
  new: string = '';
  constructor() {}
  toggle(): void {
    this.new = (this.current === 'javascript' ? 'java' : 'javascript');
    this.currentChange.emit(this.new);
  }
}
