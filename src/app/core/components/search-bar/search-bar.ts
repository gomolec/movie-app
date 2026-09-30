import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  private router = inject(Router);

  public searchQuery = signal('');

  onSearch() {
    const query = this.searchQuery();

    if (query.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: query.trim() } });

      this.searchQuery.set('');
    }
  }
}
