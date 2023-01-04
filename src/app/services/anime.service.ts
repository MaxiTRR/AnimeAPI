import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeStamp } from 'console';
import { Observable, Subject } from 'rxjs';
import { Anime, APIAnime, MyAnime } from '../interfaces/api-animes';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private apiUrl:string = 'https://api.jikan.moe/v4/anime?q=';

  private animeResponse$ = new Subject<Anime[]>();
  private animeSelected$ = new Subject<MyAnime>();
  
  constructor(private http:HttpClient) { };

  //Get animes from the API
  getAnime(anime:string): Observable<APIAnime> {
    const url = `${this.apiUrl}${anime}`
    return this.http.get<APIAnime>(url);
    //console.log(url);
  };

  //Emit the anime to the components
  addBroadcastAnime(anime:Anime[]){
    this.animeResponse$.next(anime);
  };

  //Place the anime as a observable
  getBroadcastAnime(): Observable<Anime[]>{
    return this.animeResponse$.asObservable();
  };

  //Emit the anime selected in the result-anime component to the other components
  addAnimeSelected(animeSelected: MyAnime){
    this.animeSelected$.next(animeSelected);
  };

  //Place the anime selected as a observable
  getAnimeSelected(): Observable<MyAnime>{
    return this.animeSelected$.asObservable();
  };
};
