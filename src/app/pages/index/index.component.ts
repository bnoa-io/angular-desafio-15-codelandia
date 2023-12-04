import { Component } from '@angular/core';
import { WeAreComponent } from './sections/we-are/we-are.component';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [WeAreComponent],
  template: `<app-we-are/>`,
  styles: ''
})
export class PageIndexComponent {
}
