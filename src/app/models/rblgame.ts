import {RBLSitzplatz} from "./rblsitzplatz";

export class RBLGamesEntity implements RBLGames{
  constructor(public name: string,
              public link: string,
              public id: number,
              public plaetze: RBLSitzplatz[]){
  }
}

export interface RBLGames{
  name: string,
  link: string,
  id: number,
  plaetze: RBLSitzplatz[]
}
