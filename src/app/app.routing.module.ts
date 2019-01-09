import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GameCardComponent} from './game-card/game-card.component';
import {ServerOptionsComponent} from './server-options/server-options.component';
import {GameCardListComponent} from './game-card-list/game-card-list.component';
import {TicketAlertComponent} from './ticket-alert/ticket-alert.component';

export const APP_ROUTES: Routes = [
  {
    path : '',
    redirectTo: 'games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameCardListComponent
  },
  {
    path: 'options',
    component: ServerOptionsComponent
  },
  {
    path: 'ticketalert',
    component: TicketAlertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule{

};
