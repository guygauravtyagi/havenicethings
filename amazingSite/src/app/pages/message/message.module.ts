import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * Services
 */
import { CommsModule } from './../../services/comms/comms.module';

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
    RouterModule.forChild(routes),
  ]
})
export class MessageModule { }
