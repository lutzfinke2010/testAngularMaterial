import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule,} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MenuComponent} from './menu/menu.component';
import {GameCardComponent} from './game-card/game-card.component';
import {NgxPayPalModule} from 'ngx-paypal';
import {PaypalButtonComponent} from './paypal-button/paypal-button.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServerOptionsComponent} from './server-options/server-options.component';
import {GameCardListComponent} from './game-card-list/game-card-list.component';
import {AppRoutingModule} from './app.routing.module';
import {RblgameService} from './service/rblgame.service';
import {HttpClientModule} from '@angular/common/http';
import {API_SERVER_URL_RBL, apiServerUrlFactoryRBL, BASE_URL_RBL, baseUrlFactoryRBL} from './constants';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameCardComponent,
    PaypalButtonComponent,
    ServerOptionsComponent,
    GameCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    NgxPayPalModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: BASE_URL_RBL, useFactory: baseUrlFactoryRBL},
    {provide: API_SERVER_URL_RBL, useFactory: apiServerUrlFactoryRBL},
    RblgameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
