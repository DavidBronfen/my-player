import { Component } from '@angular/core';

import { Artist } from '../../models/artist';
import { ArtistsService } from '../../services/artists.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  artistsList: Artist[];
  elementIndex: number;

  constructor( private artistsObj: ArtistsService ) {
    this.artistsList = this.artistsObj.getArtists();
  }

  toggleImage(index: number) {
    if (this.elementIndex === index) {
      this.elementIndex = 0;
    } else {
      this.elementIndex = index;
    }
  }

  playVideo(videURL) {
    console.log(videURL);
  }

}
