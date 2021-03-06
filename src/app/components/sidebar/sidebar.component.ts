import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Artist } from '../../models/artist';
import { ArtistsService } from '../../services/artists.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  artistsList: Artist[];
  showVideo: boolean = false;
  currentVideo: SafeResourceUrl;

  constructor(
    private artistsObj: ArtistsService,
    public sanitizer: DomSanitizer
  ) {
    this.artistsList = this.artistsObj.getArtists();
  }

  playVideo(videURL: string) {
    this.currentVideo = this.sanitizer.bypassSecurityTrustResourceUrl(videURL);
    this.showVideo =! this.showVideo;
  }

  clearVideo() {
    this.currentVideo = '';
    this.showVideo =! this.showVideo;
  }

}
