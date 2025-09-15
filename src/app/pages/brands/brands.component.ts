// src/app/pages/brands/brands.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Brand } from '../../brand.model'; // Corrected import path
import { BrandService } from '../../services/brand.service'; // Keep BrandService import
import { BrandProfileCardComponent } from '../../components/brand-profile-card/brand-profile-card.component';
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../services/structured-data.service';

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
  private seoService = inject(SeoService);
  private structuredDataService = inject(StructuredDataService);

  constructor() {}

  ngOnInit(): void {
    this.seoService.setTitle('Our Rice Brands - Super Fine Star & More | MRI Rice Miryalguda');
    this.seoService.updateMetaDescription('Explore signature rice brands from Miryalguda Rice Industries (MRI Rice) like Super Fine Star and MRI Gold. Discover premium quality Sona Masoori, JSR, and HMT rice brands from Miryalguda, Telangana.');
    this.seoService.updateCanonicalLink('https://www.mririce.com/brands');
    this.seoService.updateOgUrl('https://www.mririce.com/brands');
    this.seoService.updateOgTitle('Our Rice Brands - Super Fine Star & More | MRI Rice Miryalguda');
    this.seoService.updateOgDescription('Discover trusted rice brands like Super Fine Star by MRI Rice, offering premium quality and taste from Miryalguda.');
    this.seoService.updateOgImage('https://www.mririce.com/assets/images/brands-banner-packaging.webp');

    this.brands = this.brandService.getBrands();
    this.brands.forEach(brand => {
      this.structuredDataService.generateBrandSchema(brand);
    });
  }
}
