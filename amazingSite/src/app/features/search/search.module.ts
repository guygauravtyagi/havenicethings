import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ButtonsModule } from 'src/app/shared';



@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    SearchBoxComponent
  ]
})
export class SearchModule { }
