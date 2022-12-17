import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-small-toast',
  templateUrl: './small-toast.component.html',
  styleUrls: ['./small-toast.component.scss'],
  animations: [
    trigger('toast', [
      state('below', style({
        right: '-200px',
        opacity: 0,
      })),
      state('above', style({
        right: '50px',
        opacity: 1,
      })),
      transition('below => above', [
        animate('0.5s')
      ]),
      transition('above => below', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class SmallToastComponent implements OnChanges {
  @Input() isOpen = false;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isOpen'] !== undefined) this.isOpen = changes['isOpen'].currentValue;
  }
}
