import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonName = 'Button';
  @Input() category = 'Basic';

  @Output() buttonClicked: EventEmitter<Event> = new EventEmitter<Event>();

  onButtonClick(e: Event) {
    this.buttonClicked.emit(e);
  }
}
