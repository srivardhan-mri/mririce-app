export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  altText: string; // Changed from imageAltText to altText
  author: string;
  publishDate: string;
  lastmod: string;
  content: string; // Assuming blog content is also part of the model
}
