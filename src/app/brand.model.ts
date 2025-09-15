export interface BrandVariety {
  name: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string; // Added slug property
  tagline: string;
  description: string;
  logoUrl: string;
  logoAltText: string;
  mainImageUrl: string;
  mainImageAltText: string;
  varieties: BrandVariety[];
  products: string[]; // Added products property
  exploreLinkPath: string;
  exploreLinkFragment?: string;
  profileBgClass: string;
  layoutType: 'image-left' | 'image-right';
  lastmod: string;
}
