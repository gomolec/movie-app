import { HttpClient } from '@angular/common/http';
import { inject, Service, Signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Movie } from '../types/movie';
import { TmdbResponse } from '../../../core/types/tmdb-response';
import { rxResource } from '@angular/core/rxjs-interop';
import { MovieFull } from '../types/movie-full';

@Service()
export class MovieService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getDiscoverMovies() {
    return this.http.get<TmdbResponse<Movie>>(`${this.apiUrl}/discover/movie`);
  }

  getMovieFull(id: string) {
    return this.http.get<MovieFull>(`${this.apiUrl}/movie/${id}?append_to_response=credits`);
  }

}
