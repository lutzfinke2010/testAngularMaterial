import {FreiePlaetze} from "./freieplaetze";

export class GameverlaufEntity implements Gameverlauf{
  constructor(public name: string,
              public startdate: Date,
              public plaetze: FreiePlaetze[]){
  }
}

export interface Gameverlauf{
  name: string,
  startdate: Date,
  plaetze: FreiePlaetze[]
}
