import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuActive: boolean = false; // To be able to interact with the Menu
  public burgerActive: boolean = false; // To be able to interact with the Burger Button
  public backgroundActive: boolean = false; // To interact with Page-Background when menu is open

  constructor() { }

  ngOnInit(): void {
  }
  // --- MENU ---
  openMenu(): void { // Change menuActive state to OPEN the menu
    this.menuActive = !this.menuActive;
  }
  closeMenu(): void { // Change menuActive state to CLOSE the menu
    if (this.menuActive === true) this.menuActive = !this.menuActive;
  }
  // --- BURGER BUTTON ---
  openBurgerMenu(): void { // Change burgerActive state to OPEN Burger Menu
    this.burgerActive = !this.burgerActive;
  }
  closeBurgerMenu(): void { // Change burgerActive state to CLOSE Burger Menu
    if (this.burgerActive === true) this.burgerActive = !this.burgerActive;
  }
  // --- BACKGROUND MENU OPENED ---
  openBackground(): void {
    this.backgroundActive = !this.backgroundActive;
  }
  closeBackground(): void { // Change burgerActive state to CLOSE Burger Menu
    if (this.backgroundActive === true) this.backgroundActive = !this.backgroundActive;
  }

}
