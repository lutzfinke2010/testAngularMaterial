import {Component, OnInit} from '@angular/core';
import {RblgameService} from '../service/rblgame.service';
import {RBLGames} from '../models/rblgame';

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.css']
})
export class GameCardListComponent implements OnInit {

  public list: RBLGames[];

  constructor(private service: RblgameService) {
    this.list = [];
  }

  ngOnInit() {
    this.list = [];
    this.service.getRBLGames().then((games: RBLGames[]) => {
      this.list = games;
    }).catch((error) => {
      console.log(error);
    });
  }


}
