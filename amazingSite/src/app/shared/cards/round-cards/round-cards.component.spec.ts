import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundCardsComponent } from './round-cards.component';

describe('RoundCardsComponent', () => {
  let component: RoundCardsComponent;
  let fixture: ComponentFixture<RoundCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
