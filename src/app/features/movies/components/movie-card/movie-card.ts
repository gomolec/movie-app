import { Component, computed, input } from '@angular/core';
import { Movie } from '../../types/movie';
import { TMDB_IMAGE_POSTER_BASE_URL } from '../../../../core/constants/tmdb-constants';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-movie-card',
  styleUrl: './movie-card.css',
  templateUrl: './movie-card.html',
})
export class MovieCard {
  public movie = input.required<Movie>();

  public imageBaseUrl = TMDB_IMAGE_POSTER_BASE_URL;

  // public releaseYear = computed(() => {
  //   const date = this.movie().release_date;

  //   return date ? date.slice(0,4) : '';
  // });
}
