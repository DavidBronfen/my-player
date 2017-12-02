import { Pipe, PipeTransform } from '@angular/core';

import { Artist } from '../models/artist';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(bandsList: Artist[], term: string): Artist | Artist[] {
    if(term) {
      debugger;
      let filterdList = bandsList.filter(band => {
        let name = band.name.toLowerCase();
        return name.indexOf(term.toLowerCase()) > -1;
      });
      return filterdList;
    }
    return bandsList;
  }
}
