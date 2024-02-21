import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isNavOpen = false;
  openNavMenu() {
    this.isNavOpen = true;
  }
  closeNavMenu() {
    this.isNavOpen = false;
  }
}
