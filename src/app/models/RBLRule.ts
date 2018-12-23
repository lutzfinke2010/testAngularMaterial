export class RBLRuleEntity implements RBLRule{
  constructor(public name: string,
              public id: number){
  }
}

export interface RBLRule{
  name: string,
  id: number
}
