import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * Services Module
 */
import { CommsModule } from './../../services/comms/comms.module';

/**
 * Internal Components
 */
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';

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
  ]
})
export class MessageModule { }
