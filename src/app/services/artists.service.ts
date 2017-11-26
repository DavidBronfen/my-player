import { Artist } from '../models/artist';

export class ArtistsService {

  public artists: Artist[] = [
    { name: 'James Blake', image: 'http://oxfordstudent.com/wp-content/uploads/2016/05/James-Blake-1.jpg', video: 'https://www.youtube.com/embed/isIABK-0ohQ?rel=0', yearsActive: 8 },
    { name: 'Radiohead', image: 'https://www.billboard.com/files/media/02-Radiohead-press-photo-2-white-2016-billboard-650-1548.jpg', video: 'https://www.youtube.com/embed/JqBgXPuhyOs?rel=0&amp;showinfo=0', yearsActive: 32 },
    { name: 'Cass McCombs', image: 'http://www.fugitivesounds.org/wp-content/uploads/2016/08/Cass.jpg', video: 'https://www.youtube.com/embed/1R4TEsqkwO8?rel=0&amp;showinfo=0', yearsActive: 6 },
    { name: 'Jonathan Bree', image: 'https://i.ytimg.com/vi/gxRq23qVE8A/maxresdefault.jpg', video: 'https://www.youtube.com/embed/gxRq23qVE8A?rel=0&amp;controls=0&amp;showinfo=0', yearsActive: 19 },
    { name: 'Mop Mop', image: 'http://ldbk.eu/wp-content/uploads/2014/01/MopMop_1.jpg', video: 'https://www.youtube.com/embed/LDfxiRDnqWo?rel=0&amp;showinfo=0', yearsActive: 12 },
    { name: 'Franz Ferdinand', image: 'https://wallpaperscraft.com/image/franz_ferdinand_band_members_look_photo-set_3041_1366x768.jpg', video: 'https://www.youtube.com/embed/25sBhhOR4lw?rel=0&amp;showinfo=0', yearsActive: 15 },
    { name: 'Nina Simone', image: 'https://static1.squarespace.com/static/555d1970e4b00b0c736f8bcb/555d2b76e4b0b73a77eec6b4/58a0d1a22e69cf7248e7b828/1486935035266/1435761859338.jpg', video: 'https://www.youtube.com/embed/R0HmdB7OZnw?rel=0&amp;showinfo=0', yearsActive: 49 },
    { name: 'The Cure', image: 'https://sonicmoremusic.files.wordpress.com/2015/11/cure1987.jpg', video: 'https://www.youtube.com/embed/ks_qOI0lzho?rel=0&amp;showinfo=0', yearsActive: 41 },
    { name: 'Depeche Mode', image: 'http://www.vanyaland.com/wp-content/uploads/2017/02/depeche-mode.jpg', video: 'https://www.youtube.com/embed/H8t5M9_Tvzk?rel=0&amp;showinfo=0', yearsActive: 37 },
    { name: 'David Bowie', image: 'http://www.slate.com/content/dam/slate/articles/arts/culturebox/2016/01/david-bowie/160111_CBOX_David-Bowie-08.jpg.CROP.promo-xlarge2.jpg', video: 'https://www.youtube.com/embed/cYMCLz5PQVw?rel=0&amp;showinfo=0', yearsActive: 54 },
    { name: 'Todd Terje', image: 'http://d14wch1fpzoq5q.cloudfront.net/2015/02/Todd-Terje-redigerad.jpg', video: 'https://www.youtube.com/embed/WQy7blp5Yro?rel=0&amp;showinfo=0', yearsActive: 17 },
    { name: 'Polo & Pan', image: 'https://static.wixstatic.com/media/f477f5_4347e8845ebc40d394fb5f0c192b4d41~mv2.jpg', video: 'https://www.youtube.com/embed/gB98kRDUTM4?rel=0&amp;showinfo=0', yearsActive: 3 },
    { name: 'Nicolas Jaar', image: 'http://s3.amazonaws.com/factmag-images/wp-content/uploads/2015/10/NICOLAS_JAAR_001.jpeg', video: 'https://www.youtube.com/embed/rIrdTi7Bzt8?rel=0&amp;showinfo=0', yearsActive: 10 },
  ];

  getArtists() {
    return this.artists;
  }

}
