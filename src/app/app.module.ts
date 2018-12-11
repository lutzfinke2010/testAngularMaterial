import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { GameCardComponent } from './game-card/game-card.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameCardComponent,
    PaypalButtonComponent
  ],
  imports: [
    BrowserModule,
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
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
