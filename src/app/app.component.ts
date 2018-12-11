import { Component } from '@angular/core';
import {GameCardElement} from './models/gamecardelement';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './oAuth/authConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: GameCardElement[] = [
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

  constructor(private oauthService: OAuthService){
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
