import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmallToastComponent } from './small-toast/small-toast.component';


@NgModule({
  declarations: [
    SmallToastComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    SmallToastComponent
  ]
})
export class ToastsModule { }
