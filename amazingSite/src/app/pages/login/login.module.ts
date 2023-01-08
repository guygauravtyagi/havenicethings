import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InputFieldsModule } from 'src/app/shared';

import { LoginComponent } from './login/login.component';
import { ButtonsModule } from 'src/app/shared';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputFieldsModule,
    ButtonsModule
  ]
})
export class LoginModule { }
