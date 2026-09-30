import { Component, inject, input, computed } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { HeadingDivider } from '../../../../core/components/heading-divider/heading-divider';
import { rxResource } from '@angular/core/rxjs-interop';
import { MovieCard } from '../../components/movie-card/movie-card';

@Component({
  imports: [ HeadingDivider, MovieCard ],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search {
  private movieService = inject(MovieService);

  public q = input<string>('');

  public movieResource = rxResource({
    params: this.q,
    stream: (loaderParams) => this.movieService.getSearchMovies(loaderParams.params),
  });

  // private logMovies = computed(() => {
  //   const data = this.movieResource.value();
  //   if (data) {
  //     console.log('Zwrócone filmy:', data);
  //   }
  // });


}
