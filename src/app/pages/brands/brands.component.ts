// src/app/pages/brands/brands.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser'; // Import Meta service
import { CommonModule } from '@angular/common';

import { Brand, BrandService } from '../../services/brand.service';
import { BrandProfileCardComponent } from '../../components/brand-profile-card/brand-profile-card.component';

interface PageHeaderData {
  title: string;
  description: string;
}

interface BrandsIntroData {
  title: string;
  text: string;
}

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [
    CommonModule,
    BrandProfileCardComponent
  ],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit { // Implement OnInit

  pageHeader: PageHeaderData = {
    title: "Our Signature Rice Brands",
    description: "Discover the mark of excellence with Miryalguda Rice Industries' trusted brands. Each brand represents our commitment to quality, taste, and the rich agricultural heritage of Telangana."
  };

  brandsIntro: BrandsIntroData = {
    title: "The Names You Can Trust for Quality Rice",
    text: "At Miryalguda Rice Industries, our brands like Super Fine Star and MRI Gold are more than just names; they are a promise of premium quality, consistent excellence, and the authentic taste of rice cultivated in the fertile lands of Miryalguda. Explore our signature brands, each crafted to meet the diverse preferences of our valued customers."
  };

  brands: Brand[] = [];
  private brandService = inject(BrandService);
  private meta = inject(Meta); // Inject Meta service

  constructor() {}

  ngOnInit(): void {
    // Set the meta description for the Brands page
    this.meta.updateTag({
      name: 'description',
      content: 'Explore signature rice brands from Miryalguda Rice Industries (MRI Rice) like Super Fine Star and MRI Gold. Discover premium quality Sona Masoori, JSR, and HMT rice brands from Miryalguda, Telangana.'
    });
    // Set Open Graph tags for the Brands page
    this.meta.updateTag({ property: 'og:title', content: 'Our Rice Brands - Super Fine Star & More | MRI Rice Miryalguda' }); // Matches title from app.routes.ts
    this.meta.updateTag({ property: 'og:description', content: 'Discover trusted rice brands like Super Fine Star by MRI Rice, offering premium quality and taste from Miryalguda.' });
    // Consider a specific OG image for this page, e.g., a collage of your brand logos or packaging
    // this.meta.updateTag({ property: 'og:image', content: 'https://www.mririce.com/assets/images/brands-social-banner.webp' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.mririce.com/brands' }); // Canonical URL for this page

    this.brands = this.brandService.getBrands();
  }
}