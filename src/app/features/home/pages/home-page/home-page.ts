import { Component, inject } from '@angular/core';
import { DiscoverMoviesGrid } from '../../../movies/components/discover-movies-grid/discover-movies-grid';
import { HeadingDivider } from '../../../../core/components/heading-divider/heading-divider';

@Component({
  imports: [ DiscoverMoviesGrid, HeadingDivider ],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {}
