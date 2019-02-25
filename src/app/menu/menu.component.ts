import {Component, OnInit} from '@angular/core';
import {GlobalSettings} from '../GlobalSettings';
import {$} from 'protractor';
import {RblgameService} from '../service/rblgame.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public service: RblgameService) {
  }

  private menueIds = [
    'Menue1',
    'Menue2',
    'Menue3',
    'Menue4',
  ];

  ngOnInit() {
    this.removeAllActiveClasses();
    if (GlobalSettings.MENUEEINTRAG === '') {
      GlobalSettings.MENUEEINTRAG = this.menueIds[0];
    }
    const element = document.getElementById(GlobalSettings.MENUEEINTRAG);
    if (element && element.classList) {
      element.classList.add('active');
    }
  }

  private removeAllActiveClasses() {
    this.menueIds.forEach((id: string) => {
      const element = document.getElementById(id);
      if (element && element.classList) {
        element.classList.remove('active');
      }
    });
  }

  public setCheckedMenueItem(value: string): void {
    this.removeAllActiveClasses();
    GlobalSettings.MENUEEINTRAG = value;
    console.log('Menue:', GlobalSettings.MENUEEINTRAG);
    const element = document.getElementById(GlobalSettings.MENUEEINTRAG);
    if (element && element.classList) {
      element.classList.add('active');
    }

  }

}
