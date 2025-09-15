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

export interface PaginatedBlogPosts {
  posts: BlogPost[];
  totalCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = blogPostsData;

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getPaginatedBlogPosts(page: number, pageSize: number): PaginatedBlogPosts {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const posts = this.blogPosts.slice(startIndex, endIndex);
    return {
      posts: posts,
      totalCount: this.blogPosts.length
    };
  }

  getBlogPostBySlug(slug: string): BlogPost | undefined {
    return this.blogPosts.find(post => post.slug === slug);
  }
}
