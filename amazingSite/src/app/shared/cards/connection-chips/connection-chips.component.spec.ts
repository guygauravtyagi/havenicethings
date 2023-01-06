import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionChipsComponent } from './connection-chips.component';

describe('ConnectionChipsComponent', () => {
  let component: ConnectionChipsComponent;
  let fixture: ComponentFixture<ConnectionChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionChipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
