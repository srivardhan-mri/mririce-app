import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoService } from './services/seo.service';
import { StructuredDataService } from './services/structured-data.service';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Miryalguda Rice Industries';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService,
    private structuredDataService: StructuredDataService
  ) {}

  ngOnInit() {
    this.handleRedirect();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(event => {
      this.structuredDataService.clearStructuredData();
      this.addBaseStructuredData();

      const title = event['title'];
      const description = event['description'];
      if (title) {
        this.seoService.setTitle(title);
        this.seoService.updateOgTitle(title);
        this.seoService.updateTwitterTitle(title);
      }
      if (description) {
        this.seoService.updateMetaDescription(description);
        this.seoService.updateOgDescription(description);
        this.seoService.updateTwitterDescription(description);
      }
      const canonicalUrl = `https://www.mririce.com${this.router.url}`;
      this.seoService.updateCanonicalLink(canonicalUrl);
      this.seoService.updateOgUrl(canonicalUrl);
      this.seoService.updateOgType('website');

      if (title && description) {
        this.structuredDataService.generateWebPageSchema(title, description, canonicalUrl);
      }
    });
  }

  private addBaseStructuredData() {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Miryalguda Rice Industries Pvt Ltd (MRI)",
      "description": "Premier rice mill in Miryalguda, Telangana: Miryalguda Rice Industries (MRI). With 30+ years' experience, we use best-in-class technology for superior steam rice and boiled rice, including popular JSR, HMT, and BPT varieties. As a trusted rice supplier, we focus on top quality, farmer-friendly sourcing, and sustainability. Your reliable partner for bulk rice orders and quality grains sourced locally. Contact MRI Rice for inquiries about premium rice.",
      "image": "https://www.mririce.com/assets/images/mri-logo.webp",
      "@id": "https://www.mririce.com",
      "url": "https://www.mririce.com",
      "telephone": "+919866398337",
      "priceRange": "$$",
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

    const websiteSchema = {
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

    this.structuredDataService.addStructuredData([localBusinessSchema, websiteSchema]);
  }

  private handleRedirect() {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      const url = new URL(redirect);
      if (url.pathname !== '/') {
        this.router.navigateByUrl(url.pathname);
      }
    }
  }
}
