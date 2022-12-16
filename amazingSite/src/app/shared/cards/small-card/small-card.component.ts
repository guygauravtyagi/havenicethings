import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {
  okButton = 'Ok';
  closeButton = 'Cancel';
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, incidunt dolor dolorum architecto vitae ratione perspiciatis totam modi, perferendis ipsam assumenda ducimus iure sit nemo beatae nisi temporibus. Error, eos.'
}
