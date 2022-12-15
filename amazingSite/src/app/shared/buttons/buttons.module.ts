import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { ButtonComponent } from './button/button.component';
import { SolidButtonComponent } from './solid-button/solid-button.component';
import { OutlinedButtonComponent } from './outlined-button/outlined-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { BlockIconButtonComponent } from './block-icon-button/block-icon-button.component';


@NgModule({
  declarations: [
    ButtonComponent,
    BasicButtonComponent,
    SolidButtonComponent,
    OutlinedButtonComponent,
    IconButtonComponent,
    BlockIconButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasicButtonComponent,
    SolidButtonComponent,
    OutlinedButtonComponent,
    IconButtonComponent,
    BlockIconButtonComponent,
  ]
})
export class ButtonsModule { }
