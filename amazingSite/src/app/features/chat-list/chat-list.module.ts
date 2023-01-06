import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { CardsModule } from 'src/app/shared';


@NgModule({
  declarations: [
    ChatListComponent
  ],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports:[
    ChatListComponent
  ]
})
export class ChatListModule { }
