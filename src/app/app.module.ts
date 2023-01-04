import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchAnimeComponent } from './components/search-anime/search-anime.component';
import { ResultAnimeComponent } from './components/result-anime/result-anime.component';
import { SelectedAnimeComponent } from './components/selected-anime/selected-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAnimeComponent,
    ResultAnimeComponent,
    SelectedAnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
