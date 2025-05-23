// src/app/pages/terms-conditions/terms-conditions.component.ts
import { Component, OnInit, inject } from '@angular/core'; // Import OnInit and inject
import { Meta } from '@angular/platform-browser';      // Import Meta service
import { CommonModule } from '@angular/common';

interface PageHeaderData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit { // Implement OnInit

  private meta = inject(Meta); // Inject Meta service

  constructor() {}

  ngOnInit(): void {
    // Set the meta description for the Terms & Conditions page
    this.meta.updateTag({
      name: 'description',
      content: 'Review the Terms & Conditions for using the Miryalaguda Rice Industries Pvt Ltd (MRI Rice) website and services. Understand your rights and obligations.'
    });
    // Set Open Graph tags for the Terms & Conditions page
    this.meta.updateTag({ property: 'og:title', content: 'Terms & Conditions | Miryalaguda Rice Industries Pvt Ltd' }); // Matches title from app.routes.ts
    this.meta.updateTag({ property: 'og:description', content: 'Please read our Terms & Conditions carefully before using the Miryalaguda Rice Industries (MRI Rice) website.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.mririce.com/terms-conditions' }); // Canonical URL for this page
    // For static pages like this, the main site logo is often sufficient for og:image
    this.meta.updateTag({ property: 'og:image', content: 'https://www.mririce.com/assets/images/mri-logo.webp' });
  }

  pageHeader: PageHeaderData = {
    title: "Terms & Conditions",
    description: "Please read these terms and conditions carefully before using our website or services."
  };

  // The actual terms and conditions content will be in terms-conditions.component.html
  // For SEO, ensure that HTML content is well-structured with headings (h2, h3 etc.)
  // and that the text itself is clear, comprehensive, and legally sound.
}