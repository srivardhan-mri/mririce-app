// src/app/pages/home/home.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For @for, @if, etc.
import { RouterLink } from '@angular/router'; // For routerLink directive

// Import sub-components IF you decide to create them now or later.
// For now, we'll assume they are not created yet, and the HTML will be directly in home.component.html.
// import { UspItemComponent } from '../../components/usp-item/usp-item.component';
// import { HomeBrandCardComponent } from '../../components/home-brand-card/home-brand-card.component';

// Define interfaces for your data structures for better type safety
interface HeroData {
  titleLine1: string;
  highlight: string;
  titleLine2: string;
  subtitle: string;
  backgroundImageUrl: string;
  altText?: string; // For background image, if needed for context
}

interface UspData {
  iconUrl: string;
  title: string;
  text: string;
  altText: string;
}

interface FeaturedBrandData {
  imageUrl: string;
  title: string;
  description: string;
  fragment: string;
  buttonText: string;
  altText: string;
}

interface CommitmentData {
  backgroundImageUrl: string;
  title: string;
  text: string;
  buttonLink: string;
  buttonText: string;
  altText?: string; // For background image
}

interface CtaFinalData {
  title: string;
  text: string;
  primaryButtonLink: string;
  primaryButtonFragment?: string;
  primaryButtonText: string;
  secondaryButtonLink: string;
  secondaryButtonText: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    // UspItemComponent, // Add if/when created
    // HomeBrandCardComponent, // Add if/when created
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  hero: HeroData = {
    titleLine1: "Miryalaguda Rice Industries:",
    highlight: "Uncompromising Quality",
    titleLine2: "Decades of Trust.",
    subtitle: "Your premier, reliable source for the finest JSR Steam, HMT, Sona Masoori, and expertly Boiled Rice varieties. Experience the exceptional difference with our Super Fine Star and MRI brands.",
    backgroundImageUrl: 'assets/images/hero-banner-miryalaguda.jpeg',
    altText: 'Lush green paddy fields in Miryalaguda'
  };

  usps: UspData[] = [
    {
      iconUrl: 'assets/images/usp-quality-grains.png',
      title: 'Unmatched Quality',
      text: 'From fertile local fields to your table, every grain undergoes rigorous quality checks. We guarantee purity, perfect texture, and exceptional taste that sets the standard in Miryalaguda.',
      altText: 'Quality Grains Icon'
    },
    {
      iconUrl: 'assets/images/usp-trust-handshake.png',
      title: 'Built on Trust',
      text: 'For years, businesses and families across the region have relied on our integrity. Our transparent practices and consistent excellence make us the partner you can depend on.',
      altText: 'Trust Handshake Icon'
    },
    {
      iconUrl: 'assets/images/usp-reliable-supply.png',
      title: 'Reliable Supply & Support',
      text: 'Count on MRI for consistent, on-time delivery of all your rice needs, backed by our dedicated and responsive customer support team. Your satisfaction is our priority.',
      altText: 'Reliable Supply Icon'
    }
  ];

  featuredBrands: FeaturedBrandData[] = [
    {
      imageUrl: 'assets/images/SuperFineStarMRI_WadaKolamJeeraRice_DarkGreen.jpg',
      title: 'Super Fine Star',
      description: "Experience the pinnacle of taste and texture. Our premier brand featuring exceptional varieties like JSR Steam Rice and Sona Masoori, meticulously selected for discerning palates that demand the best.",
      fragment: 'super-fine-star',
      buttonText: 'Discover Super Fine Star',
      altText: 'Super Fine Star Wada Kolam Jeera Rice bag'
    },
    {
      imageUrl: 'assets/images/MRI_JSR_Purple.jpg',
      title: 'MRI Brand',
      description: "MRI brand rice delivers consistent quality and outstanding value for everyday culinary excellence. Home to popular choices like HMT Steam Rice and a range of nutritious Boiled Rice (JSR, HMT, BPT).",
      fragment: 'mri-brand',
      buttonText: 'Explore MRI Varieties',
      altText: 'MRI Brand JSR Purple rice bag'
    }
  ];

  commitment: CommitmentData = {
    backgroundImageUrl: 'assets/images/commitment-collage.jpg',
    title: "More Than Just Rice – It's Our Promise from Miryalaguda",
    text: "At Miryalaguda Rice Industries, we're not just milling rice; we're cultivating lasting relationships built on a foundation of quality you can taste and trust you can measure. Our strategic location in the heart of Miryalaguda's fertile rice belt, combined with advanced milling technology and an unwavering passion for excellence, ensures that every bag we deliver meets and exceeds your highest expectations. Choose MRI for reliable supply, steadfast support, and rice that truly stands apart.",
    buttonLink: "/quality",
    buttonText: "Our Quality Standards",
    altText: "Collage representing MRI's commitment to quality rice"
  };

  ctaFinal: CtaFinalData = {
    title: "Ready to Experience the Best Rice Miryalaguda Has to Offer?",
    text: "Whether you're a wholesaler, retailer, restaurateur, or seeking premium rice for your family, Miryalaguda Rice Industries provides unparalleled quality and service. Let's connect!",
    primaryButtonLink: "/contact",
    primaryButtonFragment: "bulk-enquiry",
    primaryButtonText: "Enquire for Bulk Orders",
    secondaryButtonLink: "/contact",
    secondaryButtonText: "Get in Touch"
  };

  constructor() {}
}