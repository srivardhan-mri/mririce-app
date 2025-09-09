// src/app/services/brand.service.ts
import { Injectable } from '@angular/core';
import brandsData from './data/brands.json';

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
  lastmod: string; // YYYY-MM-DD
}

@Injectable({
  providedIn: 'root'
})
export class BrandService { // Ensure 'export' is present

  private brandsData: Brand[] = brandsData as Brand[];

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