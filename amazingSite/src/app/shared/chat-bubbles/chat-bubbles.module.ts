import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBubblesComponent } from './chat-bubbles/chat-bubbles.component';



@NgModule({
  declarations: [
    ChatBubblesComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    ChatBubblesComponent
  ]
})
export class ChatBubblesModule { }
