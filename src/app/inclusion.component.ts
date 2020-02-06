import { Component } from '@angular/core';

@Component({
    selector: 'mybutton',
     template: `
              <div>
              <button (click)="onClick()">Click me !</button>
              </div>
              `
})
export class ButtonComponent {
 onClick(){
     alert("You Clicked Me!");
 }
}

