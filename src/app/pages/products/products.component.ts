// src/app/pages/products/products.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Product, ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

interface PageHeaderData {
  title: string;
  description: string;
}

interface ProductsIntroData {
  title: string;
  text: string;
}

interface ProductCategoryGroup {
  categoryName: string;
  products: Product[];
  // Add a property for the sanitized ID
  categoryId: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductCardComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  pageHeader: PageHeaderData = {
    title: "Our Premium Rice Selection",
    description: "Explore the diverse range of high-quality rice varieties from Miryalaguda Rice Industries, meticulously processed to bring the best of Telangana's fields to your table."
  };

  productsIntro: ProductsIntroData = {
    title: "The MRI Standard of Excellence in Every Grain",
    text: "At Miryalaguda Rice Industries, we offer a comprehensive selection of rice to meet every culinary need. Each variety is a product of our commitment to quality, from sourcing the finest paddy from local Miryalaguda farmers to employing advanced milling techniques. Discover the perfect rice for your home or business under our trusted brands, Super Fine Star and MRI."
  };

  productGroups: ProductCategoryGroup[] = [];
  private productService = inject(ProductService);

  constructor() {}

  ngOnInit(): void {
    const categories = this.productService.getCategories();
    this.productGroups = categories.map(catName => {
      return {
        categoryName: catName,
        products: this.productService.getProductsByCategory(catName),
        // Generate the ID here
        categoryId: this.generateCategoryId(catName)
      };
    });
  }

  // Method to generate a URL-friendly ID from a category name
  generateCategoryId(categoryName: string): string {
    if (!categoryName) {
      return 'unknown-category';
    }
    return categoryName.toLowerCase().replace(/\s+/g, '-') + '-category';
  }
}
