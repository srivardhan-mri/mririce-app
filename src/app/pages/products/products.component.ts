import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
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
  private structuredDataService = inject(StructuredDataService);

  constructor() {}

  ngOnInit(): void {
    const categories = this.productService.getCategories();
    this.productGroups = categories.map(catName => {
      const products = this.productService.getProductsByCategory(catName);
      const productSchema = products.map(product => ({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": `https://www.mririce.com${product.imageUrl}`,
        "description": product.description,
        "brand": {
          "@type": "Brand",
          "name": product.brandTag
        },
        "sku": `${product.brandTag}-${product.name}`,
        "mpn": `${product.brandTag}-${product.name}`,
        "offers": {
          "@type": "Offer",
          "url": `https://www.mririce.com/products#${this.generateCategoryId(catName)}`,
          "priceCurrency": "INR",
          "price": "0",
          "priceValidUntil": "2029-12-31",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Miryalguda Rice Industries"
          }
        }
      }));
      this.structuredDataService.addStructuredData(productSchema);

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
