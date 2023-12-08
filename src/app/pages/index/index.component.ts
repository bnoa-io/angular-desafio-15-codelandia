import { Component } from '@angular/core';
import { WeAreComponent } from './sections/we-are/we-are.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [
    WeAreComponent,
    TestimonialsComponent
  ],
  template: `<app-we-are></app-we-are>
    <app-testimonials></app-testimonials>`,
  styles: ''
})
export class PageIndexComponent {
}
