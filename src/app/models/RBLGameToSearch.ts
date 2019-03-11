export class RBLGameToSearchEntity implements RBLGameToSearch{
  constructor(public name: string,
              public sektor: string,
              public aktiv: boolean){
  }
}

export interface RBLGameToSearch{
  name: string;
  sektor: string;
  aktiv: boolean;
}
