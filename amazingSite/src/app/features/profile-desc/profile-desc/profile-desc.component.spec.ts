import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDescComponent } from './profile-desc.component';

describe('ProfileDescComponent', () => {
  let component: ProfileDescComponent;
  let fixture: ComponentFixture<ProfileDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
