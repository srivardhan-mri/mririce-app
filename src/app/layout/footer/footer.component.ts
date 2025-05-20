// src/app/layout/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For potential future use (*ngIf, etc.)
import { RouterLink } from '@angular/router';   // For navigation links

// Import Font Awesome specific modules and icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Example solid icons
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Brand icons

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule // Add FontAwesomeModule here
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  // Define Font Awesome icons to be used in the template
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faTwitter = faTwitter; // Your original HTML had a Twitter icon in one of the footers
}