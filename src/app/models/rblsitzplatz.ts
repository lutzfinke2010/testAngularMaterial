export class RBLSitzplatzEntity implements RBLSitzplatz {

  constructor(public bereich: string,
              public reihe: string,
              public sitz: string,
              public kategorie: string){

  }

}

export interface RBLSitzplatz{
  bereich: string,
  reihe: string,
  sitz: string,
  kategorie: string
}
