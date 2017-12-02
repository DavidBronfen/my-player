import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input()
  searchTerm: string;

  @Output()
  searchArtist: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  onSubmit(event: MouseEvent) {
    this.searchArtist.emit(this.searchTerm);
  }

}
