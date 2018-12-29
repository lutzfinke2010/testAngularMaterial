import {Component} from '@angular/core';
import {GameCardElement} from './models/gamecardelement';
import {WebsocketService} from './websocket.service';
import {ChatService} from './chatservice.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {RBLGames} from './models/rblgame';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebsocketService, ChatService]

})
export class AppComponent {
  public list: GameCardElement[] = [
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
  title = 'JavaSampleApproach';
  description = 'Angular-WebSocket Demo';

  greetings: RBLGames[] = [];
  disabled: boolean;
  name: string;
  private stompClient = null;

  constructor() {
    this.disabled = true;
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
    const socket = new SockJS('http://localhost:9123/websocket-example');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/topic/user', function (hello) {
        console.log('hello:', hello);
        console.log('hello.body:', hello.body);
        _this.showGreeting(JSON.parse(hello.body).content);
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendName() {
    this.stompClient.send(
      '/jsa/hello',
      {},
      JSON.stringify({ 'name': this.name })
    );
  }

  showGreeting(message) {
    console.log('showGreeting: ', message);
    this.greetings.push(message);
  }


}
