import { Injectable } from '@angular/core';
import { QueueingSubject } from 'queueing-subject';
import { Observable, Subscription } from 'rxjs'
import { share, switchMap } from 'rxjs/operators'
import makeWebSocketObservable, {
  GetWebSocketResponses,
} from 'rxjs-websockets'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public input$ = new QueueingSubject<string>();
  public webSocket$ = makeWebSocketObservable('ws://localhost:3000');
  public messages$: Observable<any> = this.webSocket$.pipe(
    switchMap((getResponses: GetWebSocketResponses) => {
      console.log('websocket opened')
      return getResponses(<any>this.input$)
    }),
    share(),
  )

  constructor() { }
  
  public sendMessage(message: string) {
    this.input$.next(JSON.stringify({
      data: message
    }))
  }
}
