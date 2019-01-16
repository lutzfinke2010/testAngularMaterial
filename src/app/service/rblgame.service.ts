import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_SERVER_URL_RBL, BASE_URL_RBL} from '../constants';
import {RBLGames} from '../models/rblgame';
import {Gameverlauf} from '../models/gameverlauf';


@Injectable()
export class RblgameService {

  public version = '0.0';

  readonly apiPath: string;
  readonly MODULE_ID_FOR_ETAGS = 'INVENTORYTROUBLE';

  constructor(private http: HttpClient,
              @Inject(BASE_URL_RBL) private apiBasePath,
              @Inject(API_SERVER_URL_RBL) private apiServerUrl,
  ) {

  }

  public getRBLGames(): Promise<RBLGames[]> {
    return this.http.get<RBLGames[]>(this.apiBasePath + '/rblgames').toPromise();
  }

  public getRBLGameVerlauf(): Promise<Gameverlauf[]> {
    return this.http.get<Gameverlauf[]>(this.apiBasePath + '/rblgamesverlauf').toPromise();
  }

  public startServer(): Promise<string> {
    return this.http.get<string>(this.apiBasePath + '/rblschedule/start').toPromise();
  }

  public stopServer(): Promise<string> {
    return this.http.get<string>(this.apiBasePath + '/rblschedule/stop').toPromise();
  }
}
