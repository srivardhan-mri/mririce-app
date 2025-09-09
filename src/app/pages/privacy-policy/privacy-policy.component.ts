// src/app/pages/privacy-policy/privacy-policy.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

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
export class PrivacyPolicyComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setTitle('Privacy Policy | Miryalguda Rice Industries Pvt Ltd');
    this.seoService.updateMetaDescription('Read the Privacy Policy for Miryalguda Rice Industries Pvt Ltd (MRI Rice). Understand how we collect, use, and protect your personal information on our website.');
    this.seoService.updateCanonicalLink('https://www.mririce.com/privacy-policy');
    this.seoService.updateOgUrl('https://www.mririce.com/privacy-policy');
    this.seoService.updateOgTitle('Privacy Policy | Miryalguda Rice Industries Pvt Ltd');
    this.seoService.updateOgDescription('Our commitment to your privacy. Review the Privacy Policy of Miryalguda Rice Industries (MRI Rice).');
    this.seoService.updateOgImage('https://www.mririce.com/assets/images/mri-logo.webp');
  }

  pageHeader: PageHeaderData = {
    title: "Privacy Policy",
    description: "Your privacy is important to us. This policy outlines how Miryalguda Rice Industries collects, uses, discloses, and safeguards your information."
  };

  // The actual privacy policy content will be in privacy-policy.component.html
  // For SEO, ensure that HTML content is well-structured with headings (h2, h3 etc.)
  // and that the text itself is clear and comprehensive.
}
