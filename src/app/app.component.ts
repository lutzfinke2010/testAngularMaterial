import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngularMaterial';
  isClosed = true;
  list = [
    {
      hame: 'Hallo'
    },
    {
      hame: 'Wer'
    },
    {
      hame: 'bist'
    },
    {
      hame: 'du!'
    }
  ];
}
