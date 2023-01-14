import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
  @Input() buttonName = '';
  @Input() category = 'Basic';
  @Input() iconName = 'search';
  showIcon = true;

  @Output() buttonClicked: EventEmitter<Event> = new EventEmitter<Event>();

  ngOnInit(): void {
    if(!this.category.toLowerCase().includes('icon')) this.showIcon = false;
  }

  onButtonClick(e: Event) {
    this.buttonClicked.emit(e);
  }
}
