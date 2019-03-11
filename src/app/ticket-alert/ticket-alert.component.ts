import {Component, OnInit} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {WebsocketService} from '../websocket.service';
import {ChatService} from '../chatservice.service';
import {RBLRuleResult} from '../models/rblruleresult';
import {RblgameService} from '../service/rblgame.service';
import {RBLSearchOptionContainer} from '../models/RBLGameSearchOptionContainer';
import {RBLWaitRoom} from '../models/RBLWaitRoom';

@Component({
  selector: 'app-ticket-alert',
  templateUrl: './ticket-alert.component.html',
  styleUrls: ['./ticket-alert.component.css'],
  providers: [WebsocketService, ChatService]
})
export class TicketAlertComponent implements OnInit {

  title = 'Ticket Ale1rt';
  description = 'Ticketalert für alle aktiven Spiele';

  private version = '2.6';

  rblRuleResults: RBLRuleResult[] = [];
  disabled: boolean;
  name: string;
  public status = true;
  public statusWebSocket = false;
  public searchOptionConatiner: RBLSearchOptionContainer;
  public waitroomcounter: RBLWaitRoom;
  private stompClient = null;
  private audio = new Audio();
  private playingMusic = false;

  constructor(private service: RblgameService) {
    this.waitroomcounter = {
      counter: -1
    };
    this.disabled = true;
    this.searchOptionConatiner = {
      searchOptions: [],
      scanedGames: []
    };
    this.service.version = this.version;
    // this.setDummyData();
  }

  ngOnInit() {
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;
    this.statusWebSocket = connected;
    if (connected) {
      this.rblRuleResults = [];

    }
  }

  connect() {
    //let socket = new SockJS('http://localhost:9123/websocket-example');
    let socket = new SockJS('http://185.162.251.243:9123/websocket-example');

    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      _this.stompClient.subscribe('/topic/user', function (hello) {
        _this.showWebSocketResult(JSON.parse(hello.body).content);
      });
      _this.stompClient.subscribe('/topic/searchoptions', function (searchoptions) {
        _this.showSearchoptionsResult(JSON.parse(searchoptions.body).content);
      });
      _this.stompClient.subscribe('/topic/waitroomcounter', function (waitroomcounter) {
        _this.showWaitroomCounter(JSON.parse(waitroomcounter.body).content);
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

  showWebSocketResult(message) {
    console.log('showWebSocketResult: ', message);
    window.navigator.vibrate(200); // vibrate for 200ms
    this.sound();
    this.rblRuleResults.push(message);
  }

  showSearchoptionsResult(result) {
    console.log('showSearchoptionsResult: ', result);
    this.searchOptionConatiner = result;
  }

  showWaitroomCounter(result) {
    console.log('waitrooom', result);
    this.waitroomcounter = result;
  }

  clearList() {
    this.rblRuleResults = [];
    this.searchOptionConatiner = {
      searchOptions: [],
      scanedGames: []
    };
  }

  public callStartService() {
    this.service.startServer().then((serverstatus: any) => {
      this.status = true;
    }).catch((error) => {
      this.status = false;
      console.log('error:', error);
    });
  }

  public callStopService() {
    this.service.stopServer().then((serverstatus: any) => {
      this.status = false;
    }).catch((error) => {
      this.status = true;
      console.log('error:', error);
    });
  }

  public sound() {
    if (this.playingMusic === false) {
      this.playingMusic = true;
      this.audio.src = '../assets/police.mp3';
      this.audio.load();
      this.audio.play().then(() => {
        this.playingMusic = false;
      }).catch(() => {
        this.playingMusic = false;
      });
    }
  }

  public silence() {
    if (this.audio) {
      this.audio.pause();
      this.playingMusic = false;
    }
  }

  public getDateFromServer(): string {
    if (this.searchOptionConatiner && this.searchOptionConatiner.date) {
      const date = new Date(this.searchOptionConatiner.date);
      return date.toLocaleTimeString();
    }
    return 'kein Datum verfügbar';
  }

  public getPureDateFromServer(): any {
    if (this.searchOptionConatiner && this.searchOptionConatiner.date) {
      return this.searchOptionConatiner.date;
    }
    return '';
  }

  private setDummyData() {
    const result: RBLRuleResult = {
      Check: true,
      Info: '2 22 22',
      sitzplatz: {
        bereich: '1',
        reihe: '12',
        sitz: '2',
        kategorie: '33'
      },
      link: 'http://www.google.de',
      Name: 'RB Leipzig - SC Münchaurach'
    };
    this.rblRuleResults.push(result);
    this.rblRuleResults.push(result);
    this.rblRuleResults.push(result);
    this.rblRuleResults.push(result);
  }
}
