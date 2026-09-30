import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { MovieDetails } from './features/movies/pages/movie-details/movie-details';
import { Search } from './features/movies/pages/search/search';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'movie/:id', component: MovieDetails },
  { path: 'search', component: Search },
];
