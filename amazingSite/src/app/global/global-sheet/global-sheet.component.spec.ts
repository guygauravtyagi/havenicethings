import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSheetComponent } from './global-sheet.component';

describe('GlobalSheetComponent', () => {
  let component: GlobalSheetComponent;
  let fixture: ComponentFixture<GlobalSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
