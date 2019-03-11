import {GameCardListComponent} from './game-card-list.component';

describe('GameCardListComponent', () => {
  let component: GameCardListComponent;

  beforeEach(() => {
    component = new GameCardListComponent(null, null);
  });


  describe('addsearchOptionsToRblGames', () => {

    it('beide listen leer erwarte leere liste', () => {
      component.addsearchOptionsToRblGames();

      expect(component.list.length).toBe(0);
      expect(component.searchOptionList.length).toBe(0);
    });

    it('nur searchoptions leer erwarte ungeänderte liste, sektoren sind leer', () => {
      component.addsearchOptionsToRblGames();
      component.list.push(
        {
          name: 'hallo',
          link: 'www.maxya.de',
          id: 1,
          plaetze: [],
          countSitzplaetze: 0,
          countBBLock: 0,
          countDBLock: 0,
          startdate: new Date(),
          sektoren: []
        }
      );

      expect(component.list.length).toBe(1);
      expect(component.list[0].sektoren.length).toBe(1);
      expect(component.searchOptionList.length).toBe(0);
    });

  });
});
