import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuClass:string = '';
  isVisible:boolean = window.innerWidth < 766 || window.innerWidth > 1199;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateVisibility();
  }

  private updateVisibility(): void {
    this.isVisible = window.innerWidth < 766 || window.innerWidth > 1199;
    this.menuClass = window.innerWidth > 1199 ? '' : this.menuClass;
  }

  constructor() {
    this.updateVisibility();
  }

  toggleMenu(event: Event):void {
    const button = event.currentTarget as HTMLButtonElement;
    let icon = button.children[0].textContent === 'menu' ? 'close' : 'menu';
    button.children[0].textContent = icon;
    this.menuClass = (this.menuClass === '' ? 'active' : '');
  }

  onClickMenuItem(event: Event):void {
    const menuItem = event.currentTarget as HTMLLIElement;
    menuItem.parentElement?.querySelector('li.active')?.classList.remove('active');
    menuItem.classList.add('active');
  }
}
