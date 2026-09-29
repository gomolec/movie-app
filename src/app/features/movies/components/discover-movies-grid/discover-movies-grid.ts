import { Component, inject, resource } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { MovieCard } from '../movie-card/movie-card';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  imports: [MovieCard],
  selector: 'app-discover-movies-grid',
  styleUrl: './discover-movies-grid.css',
  templateUrl: './discover-movies-grid.html',
})
export class DiscoverMoviesGrid {
  private movieService = inject(MovieService);

  public movieResource = rxResource({
    stream: () => this.movieService.getDiscoverMovies(),
  });
}
