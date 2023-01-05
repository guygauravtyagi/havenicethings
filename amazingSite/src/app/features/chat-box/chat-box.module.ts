import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatBubblesModule } from 'src/app/shared';

import { ChatBoxComponent } from './chat-box/chat-box.component';


@NgModule({
  declarations: [
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    ChatBubblesModule
  ],
  exports: [
    ChatBoxComponent
  ]
})
export class ChatBoxModule { }
