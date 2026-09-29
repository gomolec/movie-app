import { Component, computed, inject, input } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { TMDB_IMAGE_BACKDROP_BASE_URL, TMDB_IMAGE_POSTER_BASE_URL } from '../../../../core/constants/tmdb-constants';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  imports: [DatePipe, DecimalPipe],
  selector: 'app-movie-details',
  styleUrl: './movie-details.css',
  templateUrl: './movie-details.html',
})
export class MovieDetails {
  public id = input.required<string>();
  private movieService = inject(MovieService);

  public imageBaseUrl = TMDB_IMAGE_POSTER_BASE_URL;
  public backdropBaseUrl = TMDB_IMAGE_BACKDROP_BASE_URL;

  public movieResource = rxResource({
    params: this.id,
    stream: (loaderParams) => this.movieService.getMovieFull(loaderParams.params),
  });

  public director = computed(() => {
    const movie = this.movieResource.value();
    if (!movie?.credits) return null;

    return movie.credits.crew.find(person => person.job === 'Director');
  });

  public mainCast = computed(() => {
    const movie = this.movieResource.value();
    if (!movie?.credits) return [];

    return movie.credits.cast.slice(0, 5);
  });

}
