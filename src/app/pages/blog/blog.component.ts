import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, BlogPost } from '../../services/blog.service';
import { RouterLink } from '@angular/router';

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

  constructor() { }

  ngOnInit(): void {
    const allPosts = this.blogService.getBlogPosts();
    if (allPosts.length > 0) {
      this.featuredPost = allPosts[0];
      this.otherPosts = allPosts.slice(1);
    }
  }
}
