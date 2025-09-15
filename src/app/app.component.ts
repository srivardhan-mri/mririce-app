import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoService } from './services/seo.service';
import { StructuredDataService } from './services/structured-data.service';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common'; // Import isPlatformBrowser

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

  private platformId = inject(PLATFORM_ID); // Inject PLATFORM_ID

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
    this.structuredDataService.generateLocalBusinessSchema();
    this.structuredDataService.generateWebSiteSchema();
  }

  private handleRedirect() {
    if (isPlatformBrowser(this.platformId)) { // Conditionally access sessionStorage
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
}