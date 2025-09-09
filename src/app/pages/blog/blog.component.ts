import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, BlogPost } from '../../services/blog.service';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../services/structured-data.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  featuredPost: BlogPost | undefined;
  otherPosts: BlogPost[] = [];
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  private structuredDataService = inject(StructuredDataService);

  constructor() { }

  ngOnInit(): void {
    this.seoService.setTitle('MRI Rice Blog - Insights on Rice, Milling & Industry News');
    this.seoService.updateMetaDescription('Stay updated with the latest news, articles, and insights from Miryalguda Rice Industries. Learn about rice varieties, quality processes, and industry trends.');
    this.seoService.updateCanonicalLink('https://www.mririce.com/blog');
    this.seoService.updateOgUrl('https://www.mririce.com/blog');
    this.seoService.updateOgTitle('MRI Rice Blog - Insights on Rice, Milling & Industry News');
    this.seoService.updateOgDescription('Stay updated with the latest news, articles, and insights from Miryalguda Rice Industries. Learn about rice varieties, quality processes, and industry trends.');
    this.seoService.updateOgImage('https://www.mririce.com/assets/images/mri-logo.webp');

    const allPosts = this.blogService.getBlogPosts();
    if (allPosts.length > 0) {
      this.featuredPost = allPosts[0];
      this.otherPosts = allPosts.slice(1);
    }

    allPosts.forEach(post => {
      this.structuredDataService.generateBlogPostSchema(post);
    });
  }
}