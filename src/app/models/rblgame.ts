import {RBLSitzplatz} from './rblsitzplatz';

export class RBLGamesEntity implements RBLGames {
  constructor(public name: string,
              public link: string,
              public id: number,
              public plaetze: RBLSitzplatz[],
              public countSitzplaetze: number,
              public countBBLock: number,
              public countDBLock: number,
              public startdate: Date) {
  }
}

export interface RBLGames {
  name: string;
  link: string;
  id: number;
  plaetze: RBLSitzplatz[];
  countSitzplaetze: number;
  countBBLock: number;
  countDBLock: number;
  startdate: Date;
}
