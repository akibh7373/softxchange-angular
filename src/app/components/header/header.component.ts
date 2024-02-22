import { Component, HostListener, Renderer2 } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  headerShadow: boolean = false;

  constructor(private router: Router, rennderer: Renderer2) {}

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   if (window.scrollY > 100) {
  //     this.setHeaderShadow(true);
  //   } else {
  //     this.setHeaderShadow(false);
  //   }
  // }

  // setHeaderShadow(value: boolean) {
  //   this.headerShadow = value;
  //   if (value) {
  //     this.renderer.addClass(document.body, 'header-shadowed');
  //   } else {
  //     this.renderer.removeClass(document.body, 'header-shadowed');
  //   }
  // }
  isActive = false;
  openNavMenu() {
    this.isActive = true;
  }
  closeNavMenu() {
    this.isActive = false;
  }
  closeNavMenuNavigate(route: string) {
    this.isActive = false;
    this.router.navigate([route]);
  }
  isdropDownContent = false;
  isdropDownContentTwo = false;
  isdropDownContentThree = false;
  isdropDownContentFour = false;
  openDropDownNav() {
    this.isdropDownContent = !this.isdropDownContent;
  }
  openDropDownNavTwo() {
    this.isdropDownContentTwo = !this.isdropDownContentTwo;
  }
  openDropDownNavThree() {
    this.isdropDownContentThree = !this.isdropDownContentThree;
  }
  openDropDownNavFour() {
    this.isdropDownContentFour = !this.isdropDownContentFour;
  }
}
