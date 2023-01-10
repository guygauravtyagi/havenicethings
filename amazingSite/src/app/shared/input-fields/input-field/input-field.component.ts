import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input()fieldType = 'text';
  @Input()placeHolder = 'text';
  @Input() fieldValue = '';
  @Output() fieldChange: EventEmitter<Event> = new EventEmitter<Event>;

  public updateField(event: Event) {
    this.fieldChange.emit(event);
  }
}
