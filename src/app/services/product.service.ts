// src/app/services/product.service.ts
import { Injectable } from '@angular/core';

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
}

@Injectable({
  providedIn: 'root' // Makes the service available application-wide
})
export class ProductService {

  // Private array holding all product data
  // Ensure all 'imageUrl' paths point to images you've placed in 'src/assets/images/'
  private products: Product[] = [
    // Steam Rice Varieties
    {
      id: 'jsr-steam',
      name: 'JSR Steam Rice',
      brandTag: 'Super Fine Star',
      brandTagClass: 'superfine',
      description: "Celebrated for its long, slender grains and wonderfully fluffy texture when cooked. Our JSR Steam Rice is expertly processed to retain its delightful natural aroma and essential nutrients, making it an outstanding choice for daily meals and celebratory dishes.",
      attributes: "<strong>Grain:</strong> Long | <strong>Texture:</strong> Fluffy, Non-Sticky | <strong>Best For:</strong> Everyday Meals, Pulao, Fried Rice",
      packSizes: "Available in: 5kg, 10kg, 26kg bags",
      imageUrl: "assets/images/SuperFineStarMRI_JSR_Black.webp",
      altText: "Super Fine Star JSR Steam Rice bag",
      category: 'Steam Rice Varieties',
      enquiryLinkPath: '/contact',
      enquiryLinkQueryParam: 'JSR Steam Rice'
    },
    {
      id: 'hmt-steam',
      name: 'HMT Steam Rice',
      brandTag: 'Super Fine Star',
      brandTagClass: 'superfine',
      description: "A cherished favorite, MRI's HMT Steam Rice offers a harmonious blend of delightful taste and consistent, superior quality. Its medium grains cook to perfection, offering versatility for a wide array of regional specialties and everyday cooking.",
      attributes: "<strong>Grain:</strong> Medium | <strong>Texture:</strong> Soft, Versatile | <strong>Best For:</strong> Daily Meals, Regional Cuisines",
      packSizes: "Available in: 5kg, 10kg, 26kg bags",
      imageUrl: "assets/images/SuperFineStarMRI_WadaKolamJeeraRice_DarkGreen.webp",
      altText: "Super Fine Star HMT Steam Wada Kolam Jeera Rice bag",
      category: 'Steam Rice Varieties',
      enquiryLinkPath: '/contact',
      enquiryLinkQueryParam: 'HMT Steam Rice'
    },
    {
      id: 'sona-masoori-steam',
      name: 'Sona Masoori Rice',
      brandTag: 'Super Fine Star',
      brandTagClass: 'superfine',
      description: "Experience the light, aromatic elegance of our premium Sona Masoori. These fine, medium-short grains are renowned for their fluffy texture and distinct, delightful flavor. An ideal choice for exquisite biryanis, flavorful pulaos, or as a perfect complement to any curry.",
      attributes: "<strong>Grain:</strong> Medium-Short | <strong>Texture:</strong> Lightweight, Fluffy, Aromatic | <strong>Best For:</strong> Biryani, Pulao, Curries, Daily Consumption",
      packSizes: "Available in: 5kg, 10kg, 25kg, 26kg bags",
      imageUrl: "assets/images/SuperFineStar_SonaMasoori_Blue.webp",
      altText: "Super Fine Star Sona Masoori Rice bag",
      category: 'Steam Rice Varieties',
      enquiryLinkPath: '/contact',
      enquiryLinkQueryParam: 'Sona Masoori Rice'
    },
    // Nutritious Boiled Rice
    {
      id: 'jsr-boiled',
      name: 'JSR Boiled Rice',
      brandTag: 'MRI Brand',
      brandTagClass: '', // No specific class for default MRI brand tag
      description: "MRI's JSR Boiled Rice offers superior nutritional value and a consistently satisfying texture. Ideal for those seeking a wholesome, easily digestible rice variety, it’s a staple for daily consumption and robust meals.",
      attributes: "<strong>Grain:</strong> Medium/Long | <strong>Texture:</strong> Wholesome, Firm | <strong>Best For:</strong> Everyday Meals, Porridge",
      packSizes: "Available in: 10kg, 26kg bags",
      imageUrl: "assets/images/MRI_JSR_Green.webp",
      altText: "MRI Brand JSR Boiled Rice bag",
      category: 'Nutritious Boiled Rice',
      enquiryLinkPath: '/contact',
      enquiryLinkQueryParam: 'JSR Boiled Rice'
    },
    {
      id: 'hmt-boiled',
      name: 'HMT Boiled Rice',
      brandTag: 'MRI Brand',
      brandTagClass: '',
      description: "A robust and highly nutritious option, our HMT Boiled Rice is processed with utmost care to maintain its integrity. Its grains remain separate and pleasantly fluffy after cooking, making it a preferred staple in many discerning households.",
      attributes: "<strong>Grain:</strong> Medium | <strong>Texture:</strong> Fluffy, Separate Grains | <strong>Best For:</strong> Staple Meals, Variety Dishes",
      packSizes: "Available in: 10kg, 26kg bags",
      imageUrl: "assets/images/MRI_HMT_Brown.webp",
      altText: "MRI Brand HMT Boiled Rice bag",
      category: 'Nutritious Boiled Rice',
      enquiryLinkPath: '/contact',
      enquiryLinkQueryParam: 'HMT Boiled Rice'
    },
    {
      id: 'bpt-boiled',
      name: 'BPT Boiled Rice',
      brandTag: 'MRI Brand',
      brandTagClass: '',
      description: "Our BPT Boiled Rice (often cherished like Sona Masoori) provides a wholesome, satisfying meal. Its characteristic taste and texture are a testament to the rich agricultural heritage of Miryalguda, parboiled for added nutritional benefits.",
      attributes: "<strong>Grain:</strong> Medium-Short | <strong>Texture:</strong> Nutrient-Rich, Good for Digestion | <strong>Best For:</strong> Daily Consumption, Health-focused Meals",
      packSizes: "Available in: 10kg, 26kg",
      imageUrl: "assets/images/MRI_BPT_Red.webp",
      altText: "MRI Brand BPT Boiled Rice bag",
      category: 'Nutritious Boiled Rice',
      enquiryLinkPath: '/contact',
      enquiryLinkQueryParam: 'BPT Boiled Rice'
    }
  ];

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
