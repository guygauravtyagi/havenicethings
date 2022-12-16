import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    SmallCardComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    SmallCardComponent
  ]
})
export class CardsModule { }
