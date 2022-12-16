import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { GlobalSheetComponent } from './global-sheet/global-sheet.component';
import { ButtonsModule, CardsModule } from '../shared';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterBarComponent,
    GlobalSheetComponent,
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    CardsModule,
  ],
  exports: [
    NavBarComponent,
    FooterBarComponent,
    GlobalSheetComponent,
  ]
})
export class GlobalModule { }
