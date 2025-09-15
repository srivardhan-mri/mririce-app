import { Component, OnInit, inject, PLATFORM_ID, Optional } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CommonModule, isPlatformServer } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RESPONSE_INIT } from '@angular/core'; // Import RESPONSE_INIT from @angular/core

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  private meta = inject(Meta);
  private platformId = inject(PLATFORM_ID);
  private responseInit = inject(RESPONSE_INIT, { optional: true }); // Inject RESPONSE_INIT

  constructor() {}

  ngOnInit(): void {
    // Set HTTP status code to 404 for server-side rendering
    if (isPlatformServer(this.platformId) && this.responseInit) {
      this.responseInit.status = 404;
    }

    // Set the meta description for the 404 Not Found page
    this.meta.updateTag({
      name: 'description',
      content: 'The page you are looking for could not be found at Miryalguda Rice Industries Pvt Ltd (MRI Rice). Please check the URL or return to our homepage.'
    });
    // Set Open Graph tags for the 404 Not Found page
    this.meta.updateTag({ property: 'og:title', content: '404 - Page Not Found | Miryalguda Rice Industries' });
    this.meta.updateTag({ property: 'og:description', content: 'Sorry, the requested page was not found on the Miryalguda Rice Industries (MRI Rice) website.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.mririce.com/404' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.mririce.com/assets/images/mri-logo.webp' });
  }
}