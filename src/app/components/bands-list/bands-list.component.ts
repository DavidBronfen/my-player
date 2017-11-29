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

  constructor() { }

  ngOnInit() {
  }

}
