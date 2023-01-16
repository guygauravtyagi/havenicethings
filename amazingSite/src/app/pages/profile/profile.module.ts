import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ActiveModule, PublicPostsModule } from 'src/app/features';
import { ProfileDescModule } from 'src/app/features/profile-desc/profile-desc.module';
import { ButtonsModule } from 'src/app/shared';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PublicPostsModule,
    ProfileDescModule,
    ActiveModule,
    ButtonsModule
  ]
})
export class ProfileModule { }
