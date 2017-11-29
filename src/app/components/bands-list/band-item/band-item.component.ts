import { Component, Input } from '@angular/core';

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

  elementIndex: number;

  constructor() { }

  toggleImage(index: number) {
    debugger;
    if (this.elementIndex === index) {
      this.elementIndex = 0;
    } else {
      this.elementIndex = index;
    }
  }

}
