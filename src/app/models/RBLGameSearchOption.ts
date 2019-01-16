import {RBLSitzplatz} from './rblsitzplatz';
import {RBLRule} from './RBLRule';
import {RBLGames} from './rblgame';

export class RBLGameSearchOptionEntity implements RBLGameSearchOption {
  constructor(public name: string,
              public rules: RBLRule[]) {
  }
}

export interface RBLGameSearchOption {
  name: string,
  rules: RBLRule[];

}
