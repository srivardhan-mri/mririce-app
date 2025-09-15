import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../product.model'; // Corrected import path
import { ProductService } from '../../services/product.service'; // Keep ProductService import
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../services/structured-data.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  private seoService = inject(SeoService);
  private structuredDataService = inject(StructuredDataService);

  constructor() { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.product = this.productService.getProductBySlug(slug);
        if (this.product) {
          const productUrl = `https://www.mririce.com/products/${this.product.slug}`;
          this.seoService.setTitle(this.product.name + ' - MRI Rice Products');
          this.seoService.updateMetaDescription(this.product.description);
          this.seoService.updateCanonicalLink(productUrl);
          this.seoService.updateOgUrl(productUrl);
          this.seoService.updateOgTitle(this.product.name);
          this.seoService.updateOgDescription(this.product.description);
          this.seoService.updateOgImage(`https://www.mririce.com/${this.product.imageUrl}`);
          this.seoService.updateOgType('product');
          this.structuredDataService.generateProductSchema(this.product);
        } else {
          this.router.navigate(['/404']); // Navigate to 404 if product not found
        }
      } else {
        this.router.navigate(['/404']); // Navigate to 404 if no slug
      }
    });
  }
}
