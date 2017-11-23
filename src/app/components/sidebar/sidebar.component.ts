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
  artistName: string;

  constructor( private artistsObj: ArtistsService ) {
    this.artistsList = this.artistsObj.getArtists();
  }

  toggleImage(name: string) {
    if (this.artistName === name) {
      this.artistName = '';
    } else {
      this.artistName = name;
    }
  }

  playVideo(videURL) {
    console.log(videURL);
  }

}
