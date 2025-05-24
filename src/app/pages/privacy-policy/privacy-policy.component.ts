// src/app/pages/privacy-policy/privacy-policy.component.ts
import { Component, OnInit, inject } from '@angular/core'; // Import OnInit and inject
import { Meta } from '@angular/platform-browser';      // Import Meta service
import { CommonModule } from '@angular/common';

interface PageHeaderData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit { // Implement OnInit

  private meta = inject(Meta); // Inject Meta service

  constructor() {}

  ngOnInit(): void {
    // Set the meta description for the Privacy Policy page
    this.meta.updateTag({
      name: 'description',
      content: 'Read the Privacy Policy for Miryalguda Rice Industries Pvt Ltd (MRI Rice). Understand how we collect, use, and protect your personal information on our website.'
    });
    // Set Open Graph tags for the Privacy Policy page
    this.meta.updateTag({ property: 'og:title', content: 'Privacy Policy | Miryalguda Rice Industries Pvt Ltd' }); // Matches title from app.routes.ts
    this.meta.updateTag({ property: 'og:description', content: 'Our commitment to your privacy. Review the Privacy Policy of Miryalguda Rice Industries (MRI Rice).' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.mririce.com/privacy-policy' }); // Canonical URL for this page
    // For static pages like this, the main site logo is often sufficient for og:image
    this.meta.updateTag({ property: 'og:image', content: 'https://www.mririce.com/assets/images/mri-logo.webp' });
  }

  pageHeader: PageHeaderData = {
    title: "Privacy Policy",
    description: "Your privacy is important to us. This policy outlines how Miryalguda Rice Industries collects, uses, discloses, and safeguards your information."
  };

  // The actual privacy policy content will be in privacy-policy.component.html
  // For SEO, ensure that HTML content is well-structured with headings (h2, h3 etc.)
  // and that the text itself is clear and comprehensive.
}