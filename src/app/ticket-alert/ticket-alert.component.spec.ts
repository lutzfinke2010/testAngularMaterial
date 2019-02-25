import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAlertComponent } from './ticket-alert.component';

describe('TicketAlertComponent', () => {
  let component: TicketAlertComponent;
  let fixture: ComponentFixture<TicketAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
