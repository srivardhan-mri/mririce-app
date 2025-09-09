// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import productsData from './data/products.json';

// Defines the structure of a Product object
export interface Product {
  id: string; // Unique identifier for keys and linking
  name: string;
  brandTag: string; // e.g., "Super Fine Star" or "MRI Brand"
  brandTagClass?: 'superfine' | ''; // Optional class for specific styling of the brand tag
  description: string;
  attributes: string; // e.g., "Grain: Long | Texture: Fluffy..."
  packSizes: string;
  imageUrl: string; // Path to the product image, e.g., "assets/images/product.webp"
  altText: string; // Alt text for the product image
  category: 'Steam Rice Varieties' | 'Nutritious Boiled Rice'; // Product category
  enquiryLinkPath: string; // Base path for the enquiry button (e.g., '/contact')
  enquiryLinkQueryParam: string; // Product name to be used as a query parameter
  lastmod: string; // YYYY-MM-DD
}

@Injectable({
  providedIn: 'root' // Makes the service available application-wide
})
export class ProductService {

  private products: Product[] = productsData as Product[];

  constructor() { }

  // Method to get all products
  getAllProducts(): Product[] {
    return this.products;
  }

  // Method to get products filtered by a specific category
  getProductsByCategory(categoryName: string): Product[] {
    return this.products.filter(product => product.category === categoryName);
  }

  // Method to get a list of unique category names
  getCategories(): string[] {
    // Use Set to automatically handle uniqueness
    return [...new Set(this.products.map(product => product.category))];
  }
}