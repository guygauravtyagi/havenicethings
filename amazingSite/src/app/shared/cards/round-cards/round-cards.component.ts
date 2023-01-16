import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-round-cards',
  templateUrl: './round-cards.component.html',
  styleUrls: ['./round-cards.component.scss']
})
export class RoundCardsComponent {
  @Input() cardImage='';
}
