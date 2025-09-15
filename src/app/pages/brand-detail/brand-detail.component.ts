import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Brand } from '../../brand.model'; // Corrected import path
import { BrandService } from '../../services/brand.service'; // Keep BrandService import
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../services/structured-data.service';

@Component({
  selector: 'app-brand-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.scss']
})
export class BrandDetailComponent implements OnInit {

  brand: Brand | undefined;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private brandService = inject(BrandService);
  private seoService = inject(SeoService);
  private structuredDataService = inject(StructuredDataService);

  constructor() { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.brand = this.brandService.getBrandBySlug(slug);
        if (this.brand) {
          const brandUrl = `https://www.mririce.com/brands/${this.brand.slug}`;
          this.seoService.setTitle(this.brand.name + ' - MRI Rice Brands');
          this.seoService.updateMetaDescription(this.brand.description);
          this.seoService.updateCanonicalLink(brandUrl);
          this.seoService.updateOgUrl(brandUrl);
          this.seoService.updateOgTitle(this.brand.name);
          this.seoService.updateOgDescription(this.brand.description);
          this.seoService.updateOgImage(`https://www.mririce.com/${this.brand.logoUrl}`);
          this.seoService.updateOgType('website'); // Or 'Organization' if appropriate
          this.structuredDataService.generateBrandSchema(this.brand);
        } else {
          this.router.navigate(['/404']); // Navigate to 404 if brand not found
        }
      } else {
        this.router.navigate(['/404']); // Navigate to 404 if no slug
      }
    });
  }
}
