import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() fieldType = 'text';
  @Input() placeHolder = 'text';
  @Input() fieldValue = '';
  @Input() inputControl: FormControl = new FormControl('');
  @Input() addClass = '';
  @Output() fieldChange: EventEmitter<Event> = new EventEmitter<Event>;

  public updateField(event: Event) {
    this.fieldChange.emit(event);
  }
}
