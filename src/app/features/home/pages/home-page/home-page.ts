import { Component, inject } from '@angular/core';
import { MovieService } from '../../../movies/services/movie-service';

@Component({
  imports: [],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {
  private movieService = inject(MovieService);

  ngOnInit() {
    this.movieService.getDiscoverMovies().subscribe({
      next: (response) => {
        console.log('Działa:', response);
        console.log('Lista filmów:', response.results);
      },
      error: (err) => {
        console.error('Błąd:', err);
      }
    });
  }
}
