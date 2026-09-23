import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  standalone: false,
  styleUrl: './parent-component.css',
  templateUrl: './parent-component.html',
})
export class ParentComponent {
  messageFromChild: string = '';
  handleMessage(message: any): void {
    console.log(message);
    this.messageFromChild = message;
  }
}
