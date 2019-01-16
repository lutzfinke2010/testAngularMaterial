import {RBLGameSearchOption} from './RBLGameSearchOption';
import {RBLGames} from './rblgame';

export class RBLSearchOptionContainerEntity implements RBLSearchOptionContainer {
  constructor(public searchOptions: RBLGameSearchOption[],
              public scanedGames: RBLGames[],
              public date?: Date) {
  }
}

export interface RBLSearchOptionContainer {
  searchOptions: RBLGameSearchOption[];
  scanedGames: RBLGames[];
  date?: Date;
}
