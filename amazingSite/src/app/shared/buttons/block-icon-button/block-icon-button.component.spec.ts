import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockIconButtonComponent } from './block-icon-button.component';

describe('BlockIconButtonComponent', () => {
  let component: BlockIconButtonComponent;
  let fixture: ComponentFixture<BlockIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockIconButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
