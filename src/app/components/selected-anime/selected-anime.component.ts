import { Component, OnInit } from '@angular/core';
import { MyAnime } from 'src/app/interfaces/api-animes';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-selected-anime',
  templateUrl: './selected-anime.component.html',
  styleUrls: ['./selected-anime.component.css']
})
export class SelectedAnimeComponent implements OnInit {
  animeSelected:MyAnime[] = [];

  constructor(private animeSvc:AnimeService) { }

  ngOnInit(): void {
    this.animeSvc.getAnimeSelected().subscribe(result =>{
      console.log('Estoy en el componente anime-selected',result);
      this.animeSelected.push(result);
      
    });
  };
};
