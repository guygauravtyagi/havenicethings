import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../../services/comms/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public message = '';
  public messageList: string[] = [];

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.setReciever();
  }

  private setReciever() {
    this.messageService.messages$.subscribe(
      (data) => {
        this.messageList.push(JSON.parse(data).data);
      }, (err) => {
        console.log(err);
      }
    )
  }

  public sendMessage(event: Event) {
    this.messageService.sendMessage(this.message);
  }

}
