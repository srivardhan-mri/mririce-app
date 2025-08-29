
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(@Inject(DOCUMENT) private doc: Document) { }

  updateMetaDescription(content: string) {
    let metaTag = this.doc.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = this.doc.createElement('meta');
      metaTag.setAttribute('name', 'description');
      this.doc.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  }
}
