import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCircleComponent } from './active-circle.component';

describe('ActiveCircleComponent', () => {
  let component: ActiveCircleComponent;
  let fixture: ComponentFixture<ActiveCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
