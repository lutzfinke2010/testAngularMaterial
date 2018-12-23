export class FreiePlaetzeEntity implements FreiePlaetze{
  constructor(public zeitpunkt: Date,
              public count: number,
              public countBBlock: number){
  }
}

export interface FreiePlaetze{
  zeitpunkt: Date,
  count: number,
  countBBlock: number
}
