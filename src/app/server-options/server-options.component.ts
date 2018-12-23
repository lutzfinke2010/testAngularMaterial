import {Component, OnInit} from '@angular/core';
import {RblgameService} from '../service/rblgame.service';

@Component({
  selector: 'app-server-options',
  templateUrl: './server-options.component.html',
  styleUrls: ['./server-options.component.css']
})
export class ServerOptionsComponent implements OnInit {

  constructor(private service: RblgameService) {
  }

  public status = '';

  ngOnInit() {
  }

  public callStartService() {
    this.service.startServer().then((serverstatus) => {
      this.status = serverstatus;
      console.log('status:', serverstatus);
    }).catch((error) => {
      console.log('error:', error);
      this.status = error;
    });
  }

  public callStopService() {
    this.service.stopServer().then((serverstatus) => {
      this.status = serverstatus;
      console.log('status:', serverstatus);
    }).catch((error) => {
      console.log('error:', error);
      this.status = error;
    });
  }


}
