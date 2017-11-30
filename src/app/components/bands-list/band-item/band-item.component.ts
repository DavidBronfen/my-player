import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Artist } from '../../../models/artist';

@Component({
  selector: 'app-band-item',
  templateUrl: './band-item.component.html',
  styleUrls: ['./band-item.component.scss']
})
export class BandItemComponent {

  @Input()
  band: Artist;

  @Input()
  bandIndex: number;

  @Output()
  showImage: EventEmitter<Artist> = new EventEmitter<Artist>();


  elementIndex: number;

  constructor() { }

  toggleImage(index) {
    this.showImage.emit(index);
  }

}
