import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-post',
  templateUrl: './image-post.component.html',
  styleUrls: ['./image-post.component.scss']
})
export class ImagePostComponent {
  @Input() imageSrc = '';
}
