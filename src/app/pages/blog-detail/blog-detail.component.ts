import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../services/structured-data.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blogPost: BlogPost | undefined;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  private structuredDataService = inject(StructuredDataService);

  // Font Awesome Icons
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faWhatsapp = faWhatsapp;

  constructor() { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.blogPost = this.blogService.getBlogPostBySlug(slug);
        if (this.blogPost) {
          this.seoService.setTitle(this.blogPost.title);
          this.seoService.updateMetaDescription(this.blogPost.excerpt);
          this.seoService.updateOgUrl(`https://www.mririce.com/blog/${this.blogPost.slug}`);
          this.seoService.updateOgTitle(this.blogPost.title);
          this.seoService.updateOgDescription(this.blogPost.excerpt);
          this.seoService.updateOgImage(`https://www.mririce.com/${this.blogPost.imageUrl}`);
          this.seoService.updateOgType('article');
          this.structuredDataService.generateBlogPostSchema(this.blogPost);
        } else {
          this.router.navigate(['/404']); // Navigate to 404 if post not found
        }
      } else {
        this.router.navigate(['/404']); // Navigate to 404 if no slug
      }
    });
  }
}