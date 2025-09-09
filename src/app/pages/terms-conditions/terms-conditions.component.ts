// src/app/pages/terms-conditions/terms-conditions.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

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
export class TermsConditionsComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setTitle('Terms & Conditions | Miryalguda Rice Industries Pvt Ltd');
    this.seoService.updateMetaDescription('Review the Terms & Conditions for using the Miryalguda Rice Industries Pvt Ltd (MRI Rice) website and services. Understand your rights and obligations.');
    this.seoService.updateCanonicalLink('https://www.mririce.com/terms-conditions');
    this.seoService.updateOgUrl('https://www.mririce.com/terms-conditions');
    this.seoService.updateOgTitle('Terms & Conditions | Miryalguda Rice Industries Pvt Ltd');
    this.seoService.updateOgDescription('Please read our Terms & Conditions carefully before using the Miryalguda Rice Industries (MRI Rice) website.');
    this.seoService.updateOgImage('https://www.mririce.com/assets/images/mri-logo.webp');
  }

  pageHeader: PageHeaderData = {
    title: "Terms & Conditions",
    description: "Please read these terms and conditions carefully before using our website or services."
  };

  // The actual terms and conditions content will be in terms-conditions.component.html
  // For SEO, ensure that HTML content is well-structured with headings (h2, h3 etc.)
  // and that the text itself is clear, comprehensive, and legally sound.
}
