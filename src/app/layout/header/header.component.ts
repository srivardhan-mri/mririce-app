// src/app/layout/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf, [ngClass], etc.
import { RouterLink, RouterLinkActive } from '@angular/router'; // For navigation links

// Import Font Awesome specific modules and icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule // Add FontAwesomeModule here
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileNavVisible = false;

  // Define Font Awesome icons to be used in the template
  faBars = faBars;
  faTimes = faTimes;

  // Method to toggle the mobile navigation visibility
  toggleMobileNav(): void {
    this.isMobileNavVisible = !this.isMobileNavVisible;
  }

  // Optional: Method to close mobile nav when a link is clicked
  closeMobileNav(): void {
    if (this.isMobileNavVisible) {
      this.isMobileNavVisible = false;
    }
  }
}