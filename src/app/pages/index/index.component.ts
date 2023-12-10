import { Component } from '@angular/core';
import { WeAreComponent } from './sections/we-are/we-are.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { ContactComponent } from './sections/contact/contact.component';
import { DifferentialComponent } from './sections/differential/differential.component';
import { VenuesComponent } from './sections/venues/venues.component';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [
    WeAreComponent,
    TestimonialsComponent,
    ContactComponent,
    DifferentialComponent,
    VenuesComponent
  ],
  template: `
    <app-we-are></app-we-are>
    <app-differential></app-differential>
    <app-venues></app-venues>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
    `,
  styles: ''
})
export class PageIndexComponent {
}
