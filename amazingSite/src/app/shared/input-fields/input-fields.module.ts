import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], exports: [
    InputFieldComponent,
  ]
})
export class InputFieldsModule { }
