import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { ConnectionChipsComponent } from './connection-chips/connection-chips.component';



@NgModule({
  declarations: [
    SmallCardComponent,
    ConnectionChipsComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    SmallCardComponent,
    ConnectionChipsComponent
  ]
})
export class CardsModule { }
