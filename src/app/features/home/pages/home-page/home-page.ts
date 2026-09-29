import { Component, inject } from '@angular/core';
import { MovieService } from '../../../movies/services/movie-service';
import { DiscoverMoviesGrid } from '../../../movies/components/discover-movies-grid/discover-movies-grid';

@Component({
  imports: [ DiscoverMoviesGrid ],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {}
