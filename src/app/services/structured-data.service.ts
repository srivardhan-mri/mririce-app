import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Product } from './product.service';
import { BlogPost } from './blog.service';
import { Brand } from './brand.service';

@Injectable({
  providedIn: 'root'
})
export class StructuredDataService {

  constructor(@Inject(DOCUMENT) private doc: Document) { }

  private scriptType = 'application/ld+json';

  addStructuredData(data: any | any[]) {
    const dataArray = Array.isArray(data) ? data : [data];
    dataArray.forEach(item => {
      const script = this.doc.createElement('script');
      script.setAttribute('type', this.scriptType);
      script.textContent = JSON.stringify(item);
      this.doc.head.appendChild(script);
    });
  }

  clearStructuredData() {
    const scripts = this.doc.querySelectorAll(`script[type="${this.scriptType}"]`);
    scripts.forEach(script => this.doc.head.removeChild(script));
  }

  generateProductSchema(product: Product) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': product.name,
      'description': product.description,
      'image': `https://www.mririce.com/${product.imageUrl}`,
      'sku': product.id,
      'brand': {
        '@type': 'Brand',
        'name': product.brandTag
      }
    };
    this.addStructuredData(schema);
  }

  generateBlogPostSchema(post: BlogPost) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': post.title,
      'image': `https://www.mririce.com/${post.imageUrl}`,
      'author': {
        '@type': 'Organization',
        'name': post.author
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Miryalguda Rice Industries Pvt Ltd (MRI)',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.mririce.com/assets/images/mri-logo.webp'
        }
      },
      'datePublished': post.publishDate,
      'dateModified': post.lastmod
    };
    this.addStructuredData(schema);
  }

  generateAboutPageSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About MRI Rice - Our Legacy & Quality Commitment | Miryalguda',
      'description': 'With over 40 years of experience, Miryalguda Rice Industries is built on a legacy of trust and quality. Learn about our commitment to providing the finest non-basmati rice.',
      'url': 'https://www.mririce.com/about'
    };
    this.addStructuredData(schema);
  }

  generateBrandSchema(brand: Brand) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Brand',
      'name': brand.name,
      'description': brand.description,
      'logo': `https://www.mririce.com/${brand.logoUrl}`
    };
    this.addStructuredData(schema);
  }

  generateContactPageSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact MRI Rice - Bulk Rice Suppliers in Miryalguda',
      'description': 'Contact us for wholesale and bulk rice inquiries. As a top rice mill in Miryalguda, we supply to Kerala, Maharashtra, Tamil Nadu, Karnataka, and across India.',
      'url': 'https://www.mririce.com/contact'
    };
    this.addStructuredData(schema);
  }

  generateWebPageSchema(title: string, description: string, url: string) {
    const webPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': title,
      'description': description,
      'url': url,
      'isPartOf': {
        '@id': 'https://www.mririce.com/#website'
      }
    };
    this.addStructuredData(webPageSchema);

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': this.generateBreadcrumbItems(url)
    };
    this.addStructuredData(breadcrumbSchema);
  }

  private generateBreadcrumbItems(url: string) {
    const urlParts = url.replace('https://www.mririce.com', '').split('/').filter(part => part);
    const itemList = [{
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://www.mririce.com/home'
    }];

    let currentUrl = 'https://www.mririce.com';
    urlParts.forEach((part, index) => {
      currentUrl += `/${part}`;
      itemList.push({
        '@type': 'ListItem',
        'position': index + 2,
        'name': part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
        'item': currentUrl
      });
    });

    return itemList;
  }
}
