import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Anime, MyAnime } from 'src/app/interfaces/api-animes';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrls: ['./result-anime.component.css']
})
export class ResultAnimeComponent implements OnInit, OnDestroy {
  anime_response:Anime[] = [];

  animeSubscription!: Subscription;


  constructor(private animeSvc:AnimeService) { }

  ngOnInit(): void {
    this.animeSubscription = this.animeSvc.getBroadcastAnime().subscribe(result =>{
      console.log('Estoy en el componente result-anime', result)
      this.anime_response = result;
    });
  };

  ngOnDestroy(): void {
    this.animeSubscription.unsubscribe();
  }

  addAnime(anime:Anime){
    console.log(anime);
    const addAnime:MyAnime = {
      id:anime.mal_id,
      title:anime.title,
      image:anime.images['jpg'].image_url,
      episodes:anime.episodes,
      watched: 0
    };
    this.animeSvc.addAnimeSelected(addAnime);
    this.anime_response = [];
  };


}
