// src/app/pages/not-found/not-found.component.ts
import { Component, OnInit, inject } from '@angular/core'; // Import OnInit and inject
import { Meta } from '@angular/platform-browser';      // Import Meta service
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';           // For routerLink directive

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit { // Implement OnInit

  private meta = inject(Meta); // Inject Meta service

  constructor() {}

  ngOnInit(): void {
    // Set the meta description for the 404 Not Found page
    this.meta.updateTag({
      name: 'description',
      content: 'The page you are looking for could not be found at Miryalguda Rice Industries Pvt Ltd (MRI Rice). Please check the URL or return to our homepage.'
    });
    // Set Open Graph tags for the 404 Not Found page
    this.meta.updateTag({ property: 'og:title', content: '404 - Page Not Found | Miryalguda Rice Industries' }); // Matches title from app.routes.ts
    this.meta.updateTag({ property: 'og:description', content: 'Sorry, the requested page was not found on the Miryalguda Rice Industries (MRI Rice) website.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.mririce.com/404' }); // Or simply your base URL if you don't have a specific 404 route URL you want to share
    // For 404 pages, the main site logo is appropriate for og:image
    this.meta.updateTag({ property: 'og:image', content: 'https://www.mririce.com/assets/images/mri-logo.webp' });
  }

  // You can add properties here if your not-found.component.html needs them,
  // e.g., title: string = "404 - Page Not Found";
  //      message: string = "Oops! The page you're looking for doesn't exist.";
  //      homeLinkText: string = "Go to Homepage";
}