import {Component, Input, OnInit} from '@angular/core';
import {RBLGames} from '../models/rblgames';
import {RblgameService} from '../service/rblgame.service';
import {RBLGameToSearch} from '../models/RBLGameToSearch';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})

export class GameCardComponent implements OnInit {

  sektorA = false;
  sektorB = false;
  sektorC = false;
  sektorD = false;

  @Input()
  public element: RBLGames;

  constructor(public service: RblgameService) {
  }

  ngOnInit() {
    console.log('element: ', this.element);
    if (this.element && this.element.sektoren) {
      for (let i = 0; i < this.element.sektoren.length; i++) {
        if (this.element.sektoren[i].startsWith('Sektor A')) {
          this.sektorA = true;
        }
        if (this.element.sektoren[i].startsWith('Sektor B')) {
          this.sektorB = true;
        }
        if (this.element.sektoren[i].startsWith('Sektor C')) {
          this.sektorC = true;
        }
        if (this.element.sektoren[i].startsWith('Sektor D')) {
          this.sektorD = true;
        }
      }
    }
  }


  public checkValue(sektor: string, game: string) {
    if (sektor === 'A') {
      console.log(game + ' ' + sektor, this.sektorA);
      this.sendData(sektor, game, this.sektorA);
    }
    if (sektor === 'B') {
      console.log(game + ' ' + sektor, this.sektorB);
      this.sendData(sektor, game, this.sektorB);
    }
    if (sektor === 'C') {
      console.log(game + ' ' + sektor, this.sektorC);
      this.sendData(sektor, game, this.sektorC);
    }
    if (sektor === 'D') {
      console.log(game + ' ' + sektor, this.sektorD);
      this.sendData(sektor, game, this.sektorD);
    }
  }

  public sendData(sektor: string, game: string, active: boolean) {
    const rblGameToSearch: RBLGameToSearch = {
      name: game,
      sektor: sektor,
      aktiv: active
    };
    this.service.sendSearchOption(rblGameToSearch)
      .then(() => {
        console.log('saved', rblGameToSearch);
      })
      .catch((error) => {
        console.log('error:', error);
      });
  }
}
