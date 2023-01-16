import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveCircleComponent } from './active-circle/active-circle.component';
import { CardsModule } from 'src/app/shared';



@NgModule({
  declarations: [
    ActiveCircleComponent
  ],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [
    ActiveCircleComponent
  ]
})
export class ActiveModule { }
