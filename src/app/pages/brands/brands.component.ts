// src/app/pages/brands/brands.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ensure this import path is correct and that BrandService exports 'Brand' and 'BrandService'
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
export class BrandsComponent implements OnInit {

  pageHeader: PageHeaderData = {
    title: "Our Signature Brands",
    description: "Discover the distinct qualities of Super Fine Star and MRI Brand – each crafted with the hallmark of Miryalaguda Rice Industries' commitment to excellence."
  };

  brandsIntro: BrandsIntroData = {
    title: "Two Brands, One Promise: Unmatched Quality",
    text: "At Miryalaguda Rice Industries, we understand that different needs and occasions call for different types of rice. That's why we've cultivated two distinct brands, Super Fine Star and MRI Brand. While each has its unique focus, both are unified by our unwavering commitment to superior quality, local sourcing from Miryalaguda's finest fields, and the trust we've built over decades."
  };

  brands: Brand[] = [];

  private brandService = inject(BrandService);

  constructor() {}

  ngOnInit(): void {
    // This line relies on 'getBrands()' existing in BrandService
    this.brands = this.brandService.getBrands();
  }
}
