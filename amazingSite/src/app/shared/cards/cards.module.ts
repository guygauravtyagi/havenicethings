import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { ConnectionChipsComponent } from './connection-chips/connection-chips.component';
import { RoundCardsComponent } from './round-cards/round-cards.component';



@NgModule({
  declarations: [
    SmallCardComponent,
    ConnectionChipsComponent,
    RoundCardsComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    SmallCardComponent,
    ConnectionChipsComponent,
    RoundCardsComponent
  ]
})
export class CardsModule { }
