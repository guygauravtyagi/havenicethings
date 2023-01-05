import { Component, Input } from '@angular/core';
import { Message } from 'src/app/meta-data/interfaces/Message';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent {
  @Input() messagList!: Message[];
}
