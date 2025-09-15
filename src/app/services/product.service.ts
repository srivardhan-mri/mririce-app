import { Injectable } from '@angular/core';
import productsData from './data/products.json';
import { Product } from '../product.model'; // Import Product interface

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

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(product => product.slug === slug);
  }
}
