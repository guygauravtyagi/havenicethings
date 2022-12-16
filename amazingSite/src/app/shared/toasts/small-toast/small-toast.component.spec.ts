import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallToastComponent } from './small-toast.component';

describe('SmallToastComponent', () => {
  let component: SmallToastComponent;
  let fixture: ComponentFixture<SmallToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
