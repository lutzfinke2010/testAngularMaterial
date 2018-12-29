import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import {RBLGames} from './models/rblgame';

const CHAT_URL = 'ws://echo.websocket.org/';

// export interface Message {
//   author: string,
//   message: string
// }

@Injectable()
export class ChatService {
  public messages: Subject<RBLGames>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<RBLGames>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): RBLGames => {
        const data = JSON.parse(response.data);
        console.log('responseData:', data);
        return data;
      });
  }
}
