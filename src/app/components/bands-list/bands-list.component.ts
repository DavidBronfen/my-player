import { Component, OnInit, Input } from '@angular/core';

import { Artist } from '../../models/artist'

@Component({
  selector: 'app-bands-list',
  templateUrl: './bands-list.component.html',
  styleUrls: ['./bands-list.component.scss']
})
export class BandsListComponent implements OnInit {

  @Input()
  bandsList: Artist[];

  bandIndex: number
  elementIndex: number;

  constructor() { }

  ngOnInit() {
  }

  setIndex(index: number) {
    console.log(index);
    if (this.elementIndex === index) {
      this.elementIndex = 0;
    } else {
      this.elementIndex = index;
    }
  }

}
