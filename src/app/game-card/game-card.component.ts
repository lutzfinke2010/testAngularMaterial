import {Component, Input, OnInit} from '@angular/core';
import {GameCardElement} from '../models/gamecardelement';
import {GlobalSettings} from '../GlobalSettings';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  constructor() {
  }

  sektorA = false;
  sektorB = false;
  sektorC = false;
  sektorD = false;

  @Input()
  public element: GameCardElement;

  ngOnInit() {
    console.log('element: ', this.element);
  }

  getKosten(): number {
    let kosten = 0;
    if (this.sektorA) {
      kosten += GlobalSettings.KostenProSektor;
    }
    if (this.sektorB) {
      kosten += GlobalSettings.KostenProSektor;
    }
    if (this.sektorC) {
      kosten += GlobalSettings.KostenProSektor;
    }
    if (this.sektorD) {
      kosten += GlobalSettings.KostenProSektor;
    }
    return kosten;
  }
}
