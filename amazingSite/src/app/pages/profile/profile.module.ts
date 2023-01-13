import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicPostsModule } from 'src/app/features';
import { ProfileDescModule } from 'src/app/features/profile-desc/profile-desc.module';

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
    ProfileDescModule
  ]
})
export class ProfileModule { }
