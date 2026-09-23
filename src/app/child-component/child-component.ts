import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: false,
  styleUrl: './child-component.css',
  templateUrl: './child-component.html',
})
export class ChildComponent {
  @Input() receivedData: string = '';
  @Output() notifyParent = new EventEmitter<string>();
  sendToParent() {
    this.notifyParent.emit('Hello from Child B');
  }
}
