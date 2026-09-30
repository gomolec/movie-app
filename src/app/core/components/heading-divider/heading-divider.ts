import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-heading-divider',
  styleUrl: './heading-divider.css',
  templateUrl: './heading-divider.html',
})
export class HeadingDivider {
  heading = input.required<string>();
}
