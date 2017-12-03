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

  constructor() { }
}
