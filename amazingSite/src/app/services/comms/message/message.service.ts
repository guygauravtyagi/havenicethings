import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private webSocket!: WebSocket;

  constructor() {
    this.webSocket = new WebSocket('ws://localhost:3000', 'echo-protocol');
  }

  mikeCheck() {
    console.log('Hey There');
    this.webSocket.onopen
  }
}
