import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePostComponent } from './image-post/image-post.component';
import { TextPostComponent } from './text-post/text-post.component';
import { ButtonsModule } from 'src/app/shared';



@NgModule({
  declarations: [
    ImagePostComponent,
    TextPostComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ], exports: [
    ImagePostComponent,
    TextPostComponent
  ]
})
export class PublicPostsModule { }
