import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  constructor() { }

  @Input()
  public element: any;

  ngOnInit() {
  }

}
