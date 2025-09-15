import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Product } from '../product.model'; // Corrected import path
import { Brand } from '../brand.model'; // Corrected import path
import { Blog } from '../blog.model'; // Import Blog model

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
      },
      'offers': {
        '@type': 'Offer',
        'url': `https://www.mririce.com/products/${product.slug}`,
        'priceCurrency': 'INR',
        'price': '0.00', // Placeholder: Update with actual price if available
        'itemCondition': 'https://schema.org/NewCondition',
      'availability': 'https://schema.org/InStock' // Placeholder: Update with actual availability
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5', // Placeholder: Update with actual rating
        'reviewCount': '1' // Placeholder: Update with actual review count
      }
    };
    this.addStructuredData(schema);
  }

  generateBlogPostSchema(post: Blog) { // Changed BlogPost to Blog
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `https://www.mririce.com/blog/${post.slug}`
      },
      'headline': post.title,
      'description': post.excerpt,
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

  generateLocalBusinessSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Miryalguda Rice Industries Pvt Ltd (MRI)",
      "description": "Premier rice mill in Miryalguda, Telangana: Miryalguda Rice Industries (MRI). With 30+ years' experience, we use best-in-class technology for superior steam rice and boiled rice, including popular JSR, HMT, and BPT varieties. As a trusted rice supplier, we focus on top quality, farmer-friendly sourcing, and sustainability. Your reliable partner for bulk rice orders and quality grains sourced locally. Contact MRI Rice for inquiries about premium rice.",
      "image": "https://www.mririce.com/assets/images/mri-logo.webp",
      "@id": "https://www.mririce.com",
      "url": "https://www.mririce.com",
      "telephone": "+919866398337",
      "priceRange": "$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Miryalguda Industrial Area",
        "addressLocality": "Miryalguda",
        "addressRegion": "Telangana",
        "postalCode": "508207",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.85575845337269,
        "longitude": 79.54945751780716
      },
      "foundingDate": "1984-12-03",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Cheque, Bank Transfer, NEFT, RTGS",
      "areaServed": [
        { "@type": "State", "name": "Kerala", "sameAs": "https://en.wikipedia.org/wiki/Kerala" },
        { "@type": "State", "name": "Karnataka", "sameAs": "https://en.wikipedia.org/wiki/Karnataka" },
        { "@type": "State", "name": "Telangana", "sameAs": "https://en.wikipedia.org/wiki/Telangana" },
        { "@type": "State", "name": "Tamil Nadu", "sameAs": "https://en.wikipedia.org/wiki/Tamil_Nadu" },
        { "@type": "State", "name": "Maharashtra", "sameAs": "https://en.wikipedia.org/wiki/Maharashtra" },
        { "@type": "State", "name": "Andhra Pradesh", "sameAs": "https://en.wikipedia.org/wiki/Andhra_Pradesh" }
      ],
      "hasMap": "https://maps.app.goo.gl/RoCGko1nwcFZayMD9",
      "sameAs": [],
      "keywords": "Miryalguda Rice Industries Pvt Ltd, MRI Rice, Rice mill Miryalguda, Telangana rice mill, JSR Steam Rice, HMT Steam Rice, BPT Boiled Rice, Steam Rice manufacturer, Boiled Rice manufacturer, Premium rice India, Bulk rice suppliers, Miryalguda rice suppliers, Quality grains, Farmer-friendly sourcing, Rice manufacturing, Best-in-class technology rice mill",
      "additionalType": [
          "https://schema.org/Manufacturer",
          "https://schema.org/FoodEstablishment"
      ],
      "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919866398337",
          "contactType": "sales",
          "areaServed": ["IN"],
          "availableLanguage": ["te", "en", "hi"]
      }
    };
    this.addStructuredData(schema);
  }

  generateWebSiteSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.mririce.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.mririce.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "@id": "https://www.mririce.com/#website"
    };
    this.addStructuredData(schema);
  }
}
