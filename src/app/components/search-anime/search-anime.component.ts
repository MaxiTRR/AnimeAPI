import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements OnInit {

  searchInputValue:string = '';
  
  constructor(private animeSvc:AnimeService) { };

  ngOnInit(): void {
  };

  search(value:string){
    this.animeSvc.getAnime(this.searchInputValue).subscribe(result =>{
      this.animeSvc.addBroadcastAnime(result.data);
      console.log(result.data);
      this.searchInputValue = '';
    });
    
     //Revisar si es necesario pasar un parametro aca y en el template
  };



};
