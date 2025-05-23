// src/app/services/brand.service.ts
import { Injectable } from '@angular/core';

// Interface for individual rice varieties listed under a brand
export interface BrandVariety { // Ensure 'export' is present
  name: string;
  // Add any other properties if needed, e.g., link to product details
}

// Interface defining the structure for a Brand object
export interface Brand { // Ensure 'export' is present
  id: string; // Unique ID for linking (e.g., for fragments) and for ngFor tracking
  name: string;
  tagline: string;
  description: string; // Can contain HTML like <strong> for bolding
  logoUrl: string; // Path to the brand's logo image
  logoAltText: string;
  mainImageUrl: string; // Path to a main visual for the brand (e.g., a product shot)
  mainImageAltText: string;
  varieties: BrandVariety[]; // An array of key rice varieties under this brand
  exploreLinkPath: string; // Base path for an "explore" button (e.g., '/products')
  exploreLinkFragment?: string; // Optional fragment for the explore link
  profileBgClass: string; // A CSS class for unique background/border styling (e.g., 'super-fine-star-bg')
  layoutType: 'image-left' | 'image-right'; // To control the visual layout (image on left or right)
}

@Injectable({
  providedIn: 'root'
})
export class BrandService { // Ensure 'export' is present

  private brandsData: Brand[] = [
    {
      id: 'super-fine-star',
      name: 'Super Fine Star',
      tagline: 'The Epitome of Purity, Aroma, and Taste.',
      description: "Super Fine Star is our premier export-quality range, meticulously crafted for those special occasions when only the best will do. This brand focuses on exquisite <strong>non-boiled rice varieties</strong>, renowned for their exceptional taste, delicate aroma, and perfect texture. Each grain of Super Fine Star promises an unparalleled culinary experience, reflecting the pinnacle of rice milling artistry.",
      logoUrl: 'assets/images/super-fine-star-logo.webp',
      logoAltText: 'Super Fine Star Logo',
      mainImageUrl: 'assets/images/SuperFineStarMRI_WadaKolamJeeraRice_DarkGreen.webp',
      mainImageAltText: 'Premium Super Fine Star Wada Kolam Jeera Rice bag',
      varieties: [
        { name: 'HMT Steam Rice' },
        { name: 'Sona Masoori (Premium Raw)' },
        { name: 'JSR Steam Rice' }
      ],
      exploreLinkPath: '/products',
      profileBgClass: 'super-fine-star-bg',
      layoutType: 'image-left'
    },
    {
      id: 'mri-brand',
      name: 'MRI Brand',
      tagline: 'Everyday Excellence, Wholesome Goodness.',
      description: "The MRI Brand is your trusted choice for consistent quality and excellent value in <strong>boiled rice varieties</strong>. Perfect for daily meals and a staple in healthy households, our MRI Brand rice is processed to retain nutrients while delivering a satisfying taste and texture. It represents our commitment to providing reliable, high-quality rice for every family and every occasion.",
      logoUrl: 'assets/images/mri-brand-logo.webp',
      logoAltText: 'MRI Brand Logo',
      mainImageUrl: 'assets/images/MRI_BPT_Red.webp',
      mainImageAltText: 'Reliable MRI Brand BPT Rice bag',
      varieties: [
        { name: 'JSR Boiled Rice' },
        { name: 'HMT Boiled Rice' },
        { name: 'BPT Boiled Rice' }
      ],
      exploreLinkPath: '/products',
      profileBgClass: 'mri-brand-bg',
      layoutType: 'image-right'
    }
  ];

  constructor() { }

  // Ensure this method exists and is public (default)
  getBrands(): Brand[] {
    return this.brandsData;
  }

  // Ensure this method exists and is public (default)
  getBrandById(id: string): Brand | undefined {
    return this.brandsData.find(brand => brand.id === id);
  }
}
