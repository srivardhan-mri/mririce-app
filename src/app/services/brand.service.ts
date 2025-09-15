import { Injectable } from '@angular/core';
import brandsData from './data/brands.json';
import { Brand } from '../brand.model'; // Import Brand interface

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brandsData: Brand[] = brandsData as Brand[];

  constructor() { }

  getBrands(): Brand[] {
    return this.brandsData;
  }

  getBrandById(id: string): Brand | undefined {
    return this.brandsData.find(brand => brand.id === id);
  }

  getBrandBySlug(slug: string): Brand | undefined {
    return this.brandsData.find(brand => brand.slug === slug);
  }
}
