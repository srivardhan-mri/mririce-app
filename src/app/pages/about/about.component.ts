import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StructuredDataService } from '../../services/structured-data.service';

// Interfaces for data structures
interface PageHeaderData {
  title: string;
  description: string;
}

interface AboutSectionContent {
  title: string;
  paragraphs: string[];
  highlight?: { text: string; class?: string };
  imageUrl: string;
  imageAlt: string;
  layoutType: 'text-first' | 'image-first';
}

interface ValueData {
  iconClass: string;
  title: string;
  text: string;
}

interface CtaAboutData {
  title: string;
  text: string;
  primaryButtonLink: string;
  primaryButtonText: string;
  secondaryButtonLink: string;
  secondaryButtonText: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private structuredDataService = inject(StructuredDataService);

  constructor() {}

  ngOnInit(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Miryalguda Rice Industries",
      "image": "https://www.mririce.com/assets/images/mri-logo.webp",
      "@id": "",
      "url": "https://www.mririce.com/about",
      "telephone": "+91-984-816-4333",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sagar Road, Beside HP Petrol Bunk,",
        "addressLocality": "Miryalaguda",
        "postalCode": "508207",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.8752,
        "longitude": 79.5885
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      } 
    };
    this.structuredDataService.addStructuredData(structuredData);
  }

  pageHeader: PageHeaderData = {
    title: "Our Story: A 40-Year Legacy of Excellence in Rice Milling",
    description: "From a small family mill to a leading wholesale rice supplier in India, discover the journey of Miryalguda Rice Industries (MRI) and our unwavering commitment to quality."
  };

  introSection: AboutSectionContent = {
    title: "Your Trusted Partner for Wholesale Non-Basmati Rice",
    paragraphs: [
      "For over four decades, Miryalguda Rice Industries (MRI) has been a cornerstone of the non-basmati rice industry in India. We are more than just a rice mill; we are a trusted partner for wholesalers and distributors across <strong>Kerala, Maharashtra, Tamil Nadu, and Karnataka</strong>.",
      "Our reputation is built on the pillars of <strong>consistent quality, reliable supply, and unwavering trust</strong>. We specialize in milling the finest non-basmati rice varieties, including Sona Masoori, JSR, and HMT, ensuring every grain meets our exacting standards."
    ],
    imageUrl: "assets/images/mri-logo.webp",
    imageAlt: "Miryalguda Rice Industries (MRI) Logo - Wholesale Non-Basmati Rice Supplier",
    layoutType: 'text-first'
  };

  legacySection: AboutSectionContent = {
    title: "A Family Legacy of Rice Milling Excellence Since 1984",
    paragraphs: [
      "Our journey began in 1984 with a simple mission: to provide the best quality rice to our community. This family legacy has grown into a state-of-the-art milling operation with a capacity of <strong>400 tons per day</strong>.",
      "This growth allows us to serve as a reliable <strong>bulk rice supplier</strong> for businesses of all sizes, while still maintaining the personal touch and commitment to quality that has defined us for over 40 years."
    ],
    imageUrl: "assets/images/mri-growth-legacy.webp",
    imageAlt: "Illustration of MRI Rice's growth as a bulk rice supplier since 1984",
    layoutType: 'image-first'
  };

  communitySection: AboutSectionContent = {
    title: "Rooted in Miryalguda, Serving the Nation",
    paragraphs: [
      "Our strategic location in Miryalguda, the heart of Telangana’s rice belt, allows us to source the finest paddy directly from local farmers. This not only ensures the quality of our rice but also supports the local agricultural community.",
      "From our home in Telangana, we are proud to be a leading <strong>rice supplier to Kerala, Maharashtra, Tamil Nadu, and Karnataka</strong>, bringing the taste of authentic Indian rice to millions."
    ],
    imageUrl: "assets/images/mri-local-farmers-Miryalguda.webp",
    imageAlt: "MRI Rice supporting local farmers in Miryalguda, Telangana",
    layoutType: 'text-first'
  };

  expertiseSection: AboutSectionContent = {
    title: "The MRI Difference: Consistent Quality, Reliable Supply",
    paragraphs: [
      "What makes MRI the preferred choice for <strong>wholesale rice suppliers</strong>? It's our relentless focus on <strong>consistent quality and reliable supply</strong>. Our modern milling techniques and rigorous quality control ensure that every bag of rice we produce is up to the mark.",
      "This commitment to excellence has made us a trusted name for Sona Masoori, JSR, HMT, and other non-basmati rice varieties. When you partner with MRI, you partner with a legacy of trust."
    ],
    imageUrl: "assets/images/mri-rice-quality-finish.webp",
    imageAlt: "Close-up of high-quality non-basmati rice grains from MRI Rice",
    layoutType: 'image-first'
  };

  coreValuesTitle: string = "Our Promise to Our Partners";
  coreValues: ValueData[] = [
    {
      iconClass: "fas fa-medal",
      title: "Consistent Quality",
      text: "We guarantee the quality of every grain. Our rigorous testing and quality control processes ensure that you always receive the finest non-basmati rice."
    },
    {
      iconClass: "fas fa-handshake-angle",
      title: "Unwavering Trust",
      text: "For over 40 years, we have built lasting relationships with our partners based on transparency, integrity, and a commitment to their success."
    },
    {
      iconClass: "fas fa-truck-ramp-box",
      title: "Reliable Supply",
      text: "With a milling capacity of 400 tons per day, we can meet the demands of any business, ensuring you have the rice you need, when you need it."
    },
    {
      iconClass: "fas fa-headset",
      title: "Dedicated Support",
      text: "Your success is our success. Our team is always available to provide you with the support you need to grow your business."
    }
  ];

  ctaAbout: CtaAboutData = {
    title: "Become a Partner with a Leader in Wholesale Rice",
    text: "Join the growing network of wholesalers and distributors who trust MRI for their non-basmati rice needs. Contact us today to learn more about our products and partnership opportunities.",
    primaryButtonLink: "/contact",
    primaryButtonText: "Contact Us for Wholesale Inquiries",
    secondaryButtonLink: "/products",
    secondaryButtonText: "Explore Our Rice Varieties"
  };
}