import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { GlobalSheetComponent } from './global-sheet/global-sheet.component';
import { ButtonsModule, CardsModule, ToastsModule } from '../shared';
import { SearchModule } from '../features';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterBarComponent,
    GlobalSheetComponent,
  ],
  imports: [
    CommonModule,
    SearchModule,
    ButtonsModule,
    CardsModule,
    ToastsModule,
  ],
  exports: [
    NavBarComponent,
    FooterBarComponent,
    GlobalSheetComponent,
  ]
})
export class GlobalModule { }
