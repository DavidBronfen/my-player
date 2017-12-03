import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent {

  @Input()
  imagePath: string;
  toggleImg: boolean = false;

  constructor() {
  }

    toggleImage() {
      this.toggleImg = !this.toggleImg;
    }

}
