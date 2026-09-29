import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { MovieDetails } from './features/movies/pages/movie-details/movie-details';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'movie/:id', component: MovieDetails },
];
