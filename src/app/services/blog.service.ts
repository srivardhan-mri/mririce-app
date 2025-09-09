// src/app/services/blog.service.ts
import { Injectable } from '@angular/core';
import blogPostsData from './data/blogs.json';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  publishDate: string; // YYYY-MM-DD
  lastmod: string; // YYYY-MM-DD
  imageUrl: string;
  altText: string;
  excerpt: string; // Short summary for list view
  content: string; // Full HTML content for detail view
  tags: string[];
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = blogPostsData;

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }
  getBlogPostBySlug(slug: string): BlogPost | undefined {
    return this.blogPosts.find(post => post.slug === slug);
  }
}
