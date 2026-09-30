import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  imports: [RouterLink, SearchBar],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
