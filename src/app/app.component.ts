import { Component } from '@angular/core';
import {GameCardElement} from './models/gamecardelement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public list: GameCardElement[] = [
    {
      name: 'Hallo',
      link: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      name: 'Wer',
      link: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    },
    {
      name: 'bist',
      link: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      name: 'du!',
      link: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    }
  ];

}
