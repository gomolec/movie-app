import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Movie } from '../types/movie';
import { TmdbResponse } from '../../../core/types/tmdb-response';

@Service()
export class MovieService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getDiscoverMovies() {
    return this.http.get<TmdbResponse<Movie>>(`${this.apiUrl}/discover/movie`);
  }
}
