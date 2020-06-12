import { Component } from '@angular/core';

@Component({
  selector: 'ctac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  word: string = '';

  buttonWorks(): void {
    console.log('button works!')
  }
}
