import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blogPost: BlogPost | undefined;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);

  constructor() { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.blogPost = this.blogService.getBlogPostBySlug(slug);
        if (!this.blogPost) {
          this.router.navigate(['/404']); // Navigate to 404 if post not found
        }
      } else {
        this.router.navigate(['/404']); // Navigate to 404 if no slug
      }
    });
  }
}
