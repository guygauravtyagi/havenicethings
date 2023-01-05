import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/**
 * Services Module
 */
import { CommsModule } from './../../services/comms/comms.module';
import { ChatBoxModule } from 'src/app/features/chat-box/chat-box.module';

/**
 * Internal Components
 */
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: '',
    component: MessageComponent
  }
];

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    CommsModule,
    FormsModule,
    RouterModule.forChild(routes),
    ChatBoxModule,
  ]
})
export class MessageModule { }
