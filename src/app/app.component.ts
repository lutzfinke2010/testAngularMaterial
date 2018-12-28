import {Component} from '@angular/core';
import {GameCardElement} from './models/gamecardelement';
import {WebsocketService} from './websocket.service';
import {ChatService} from './chatservice.service';

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

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log('Response from websocket: ' + msg.author);
    });

    setTimeout(() => {
      this.sendMsg();
    }, 3000);
  }

  private message = {
    author: 'tutorialedge',
    message: 'this is a test message'
  };

  sendMsg() {
    console.log('new message from client to websocket: ', this.message);
    this.chatService.messages.next(this.message);
    this.message.message = '';
  }


}
