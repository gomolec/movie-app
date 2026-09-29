import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  imports: [MovieCard],
  selector: 'app-discover-movies-grid',
  styleUrl: './discover-movies-grid.css',
  templateUrl: './discover-movies-grid.html',
})
export class DiscoverMoviesGrid {
  private movieService = inject(MovieService);

  public movieResource = this.movieService.discoverMovies;
}
