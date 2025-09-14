import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, BlogPost } from '../../services/blog.service';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../services/structured-data.service';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, PaginatorComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  featuredPost: BlogPost | undefined;
  otherPosts: BlogPost[] = [];
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  private structuredDataService = inject(StructuredDataService);

  currentPage: number = 1;
  pageSize: number = 9; // 1 featured + 8 others
  totalPosts: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.seoService.setTitle('MRI Rice Blog - Insights on Rice, Milling & Industry News');
    this.seoService.updateMetaDescription('Stay updated with the latest news, articles, and insights from Miryalguda Rice Industries. Learn about rice varieties, quality processes, and industry trends.');
    this.seoService.updateCanonicalLink('https://www.mririce.com/blog');
    this.seoService.updateOgUrl('https://www.mririce.com/blog');
    this.seoService.updateOgTitle('MRI Rice Blog - Insights on Rice, Milling & Industry News');
    this.seoService.updateOgDescription('Stay updated with the latest news, articles, and insights from Miryalguda Rice Industries. Learn about rice varieties, quality processes, and industry trends.');
    this.seoService.updateOgImage('https://www.mririce.com/assets/images/mri-logo.webp');

    this.loadPosts();
  }

  loadPosts(): void {
    const paginatedResult = this.blogService.getPaginatedBlogPosts(this.currentPage, this.pageSize);
    this.totalPosts = paginatedResult.totalCount;

    if (this.currentPage === 1 && paginatedResult.posts.length > 0) {
      this.featuredPost = paginatedResult.posts[0];
      this.otherPosts = paginatedResult.posts.slice(1);
    } else {
      this.featuredPost = undefined;
      this.otherPosts = paginatedResult.posts;
    }

    paginatedResult.posts.forEach(post => {
      this.structuredDataService.generateBlogPostSchema(post);
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPosts();
  }
}
