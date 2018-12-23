import {Component, OnInit} from '@angular/core';
import {GameCardElement} from '../models/gamecardelement';

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.css']
})
export class GameCardListComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit() {
    this.list = [
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

  public load() {
    console.log('List:', this.list);
    this.list = [
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

}
