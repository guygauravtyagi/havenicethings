import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InputFieldsModule } from 'src/app/shared';

import { LoginComponent } from './login/login.component';
import { ButtonsModule } from 'src/app/shared';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  }
];



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    InputFieldsModule,
    ButtonsModule
  ]
})
export class LoginModule { }
