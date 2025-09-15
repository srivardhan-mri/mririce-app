export interface Product {
  id: string; // Unique identifier for keys and linking
  name: string;
  slug: string; // Added slug property
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
  weight: string; // Added weight property
  packaging: string; // Added packaging property
  bestFor: string; // Added bestFor property
  lastmod: string; // YYYY-MM-DD
}
