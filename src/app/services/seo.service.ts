import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private titleService: Title
  ) { }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  updateMetaDescription(content: string) {
    this.updateMetaTag('description', content);
  }

  updateCanonicalLink(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  updateOgUrl(url: string) {
    this.updateMetaTag('og:url', url, 'property');
  }

  updateOgTitle(title: string) {
    this.updateMetaTag('og:title', title, 'property');
  }

  updateOgDescription(description: string) {
    this.updateMetaTag('og:description', description, 'property');
  }

  updateOgImage(imageUrl: string) {
    this.updateMetaTag('og:image', imageUrl, 'property');
  }

  updateTwitterCard(card: string) {
    this.updateMetaTag('twitter:card', card);
  }

  updateTwitterTitle(title: string) {
    this.updateMetaTag('twitter:title', title);
  }

  updateTwitterDescription(description: string) {
    this.updateMetaTag('twitter:description', description);
  }

  updateTwitterImage(imageUrl: string) {
    this.updateMetaTag('twitter:image', imageUrl);
  }

  private updateMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
    let metaTag = this.doc.querySelector(`meta[${attr}="${name}"]`);
    if (!metaTag) {
      metaTag = this.doc.createElement('meta');
      metaTag.setAttribute(attr, name);
      this.doc.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  }
}