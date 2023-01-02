import { Component } from '@angular/core';
import { MessageService } from './../../../services/comms/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  constructor(private messageService: MessageService) {
    this.messageService.mikeCheck();
  }

}
