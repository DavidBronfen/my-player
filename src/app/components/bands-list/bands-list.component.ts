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
  term: string;

  constructor() { }

  ngOnInit() {
  }

  setIndex(index: number) {
    if (this.elementIndex === index) {
      this.elementIndex = 0;
    } else {
      this.elementIndex = index;
    }
  }

  setSearchTerm(term: string) {
    this.term = term;
  }

}
