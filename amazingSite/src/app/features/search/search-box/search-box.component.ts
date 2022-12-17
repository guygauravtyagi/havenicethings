import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  showDropDown = false;
  @Output() textEntered: EventEmitter<any> = new EventEmitter<any>();

  searchItem(event: Event) {
    if((<HTMLInputElement>event.target).value.length > 2) {
      this.textEntered.emit((<HTMLInputElement>event.target).value);
      this.showDropDown = true;
    } else {
      this.showDropDown = false;
    }
  }
}
