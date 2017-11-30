import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular material imports.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCardModule,
         MatSidenavModule,
         MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArtistsService } from './services/artists.service';
import { BandsListComponent } from './components/bands-list/bands-list.component';
import { SearchComponent } from './components/search/search.component';
import { BandItemComponent } from './components/bands-list/band-item/band-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    BandsListComponent,
    SearchComponent,
    BandItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  providers: [ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
