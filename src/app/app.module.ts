import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// Angular material imports.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCardModule,
         MatSidenavModule,
         MatIconModule,
         MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArtistsService } from './services/artists.service';
import { BandsListComponent } from './components/bands-list/bands-list.component';
import { SearchComponent } from './components/search/search.component';
import { BandItemComponent } from './components/bands-list/band-item/band-item.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    BandsListComponent,
    SearchComponent,
    BandItemComponent,
    SearchFilterPipe,
    ImagePreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
