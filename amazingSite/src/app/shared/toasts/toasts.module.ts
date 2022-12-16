import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallToastComponent } from './small-toast/small-toast.component';


@NgModule({
  declarations: [
    SmallToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmallToastComponent
  ]
})
export class ToastsModule { }
