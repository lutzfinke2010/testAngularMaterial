import {Component, OnInit} from '@angular/core';
import {RblgameService} from '../service/rblgame.service';
import {RBLGames} from '../models/rblgames';
import {RblSearchOptionsService} from '../service/rblgame.searchoptions';
import {RBLGameSearchOption} from '../models/RBLGameSearchOption';
import {RBLRule} from '../models/RBLRule';

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.css']
})
export class GameCardListComponent implements OnInit {

  public list: RBLGames[];
  public searchOptionList: RBLGameSearchOption[];
  private internList: RBLGames[];

  constructor(private service: RblgameService, private searchOptionService: RblSearchOptionsService) {
    this.list = [];
    this.searchOptionList = [];
  }

  ngOnInit() {
    this.list = [];
    this.service.getRBLGames()
      .then((games: RBLGames[]) => {
        games = games.filter((game: RBLGames) => {
          return (game.name.startsWith('RB'));
        });
        this.internList = games;
        this.addIcons();
        return this.searchOptionService.getSearchOptions();
      })
      .then((searchOptions: RBLGameSearchOption[]) => {
        this.searchOptionList = searchOptions;
        this.addsearchOptionsToRblGames();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public addsearchOptionsToRblGames() {
    for (let i = 0; i < this.searchOptionList.length; i++) {
      for (let j = 0; j < this.internList.length; j++) {
        if (this.internList[j].name === this.searchOptionList[i].name) {
          this.addSektorenToGame(this.internList[j], this.searchOptionList[i].rules);
        }
      }
    }
    this.list = this.internList;
  }

  private addSektorenToGame(rblGame: RBLGames, rules: RBLRule[]) {
    for (let i = 0; i < rules.length; i++) {
      if (rblGame.sektoren === undefined) {
        rblGame.sektoren = [];
      }
      rblGame.sektoren.push(rules[i].name);
    }
  }

  private addIcons() {
    for (let j = 0; j < this.internList.length; j++) {
      if (this.internList[j].name.toLocaleLowerCase().indexOf('hertha') > 0) {
        this.internList[j].imagePath = 'assets\\icons\\bundesliga\\HerthaBSC.png';
      } else {
        this.internList[j].imagePath = 'assets\\icons\\bundesliga\\default.png';
      }
    }
  }
}
