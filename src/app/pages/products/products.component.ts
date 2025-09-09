import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../services/structured-data.service';

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
  categoryId: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  pageHeader: PageHeaderData = {
    title: "Wholesale Rice Products for India",
    description: "Your reliable source for bulk non-basmati rice. We supply high-quality Sona Masoori, JSR, HMT, and more to wholesalers in Kerala, Maharashtra, Tamil Nadu, and Karnataka."
  };

  productsIntro: ProductsIntroData = {
    title: "Premium Rice for Your Business Needs",
    text: "At Miryalguda Rice Industries, we understand the needs of our wholesale partners. We offer a wide range of non-basmati rice varieties, available in various packaging sizes to suit your business requirements. Our commitment to consistent quality and reliable supply makes us the ideal partner for your rice business."
  };

  productGroups: ProductCategoryGroup[] = [];
  private productService = inject(ProductService);
  private seoService = inject(SeoService);
  private structuredDataService = inject(StructuredDataService);

  constructor() {}

  ngOnInit(): void {
    this.seoService.setTitle('Premium Rice Products | JSR, HMT, Sona Masoori | MRI Rice');
    this.seoService.updateMetaDescription('Explore our wide range of high-quality non-basmati rice varieties, including JSR, HMT, and Sona Masoori. We provide reliable supply for bulk and wholesale orders.');
    this.seoService.updateCanonicalLink('https://www.mririce.com/products');
    this.seoService.updateOgUrl('https://www.mririce.com/products');
    this.seoService.updateOgTitle('Premium Rice Products | JSR, HMT, Sona Masoori | MRI Rice');
    this.seoService.updateOgDescription('Explore our wide range of high-quality non-basmati rice varieties, including JSR, HMT, and Sona Masoori. We provide reliable supply for bulk and wholesale orders.');
    this.seoService.updateOgImage('https://www.mririce.com/assets/images/products-banner-rice-varieties.webp');

    const categories = this.productService.getCategories();
    this.productGroups = categories.map(catName => {
      const products = this.productService.getProductsByCategory(catName);
      products.forEach(product => {
        this.structuredDataService.generateProductSchema(product);
      });

      return {
        categoryName: catName,
        products: products,
        categoryId: this.generateCategoryId(catName)
      };
    });
  }

  generateCategoryId(categoryName: string): string {
    if (!categoryName) {
      return 'unknown-category';
    }
    return categoryName.toLowerCase().replace(/\s+/g, '-') + '-category';
  }
}