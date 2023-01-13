import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDescComponent } from './profile-desc/profile-desc.component';
import { ButtonsModule, ImagesModule } from 'src/app/shared';


@NgModule({
  declarations: [
    ProfileDescComponent
  ],
  imports: [
    CommonModule,
    ImagesModule,
    ButtonsModule
  ],
  exports: [
    ProfileDescComponent
  ]
})
export class ProfileDescModule { }
