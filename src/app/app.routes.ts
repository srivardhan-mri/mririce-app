// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Import your page components
// Ensure these paths are correct based on your project structure
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component'; // Assuming you created this
import { NotFoundComponent } from './pages/not-found/not-found.component'; // Optional: for a 404 page

export const routes: Routes = [
  // Redirect empty path to '/home'
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Define routes for each page
  { path: 'home', component: HomeComponent, title: 'Miryalaguda Rice Industries - Home' },
  { path: 'about', component: AboutComponent, title: 'About Us - Miryalaguda Rice Industries' },
  { path: 'products', component: ProductsComponent, title: 'Our Rice - Miryalaguda Rice Industries' },
  { path: 'brands', component: BrandsComponent, title: 'Our Brands - Miryalaguda Rice Industries' },
  { path: 'quality', component: QualityComponent, title: 'Quality Assurance - Miryalaguda Rice Industries' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us - Miryalaguda Rice Industries' },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Privacy Policy - Miryalaguda Rice Industries' },
  { path: 'terms-conditions', component: TermsConditionsComponent, title: 'Terms & Conditions - Miryalaguda Rice Industries' },

  // Optional: Wildcard route for a 404 Page Not Found component
  // Make sure this is the LAST route in the array
  { path: '**', component: NotFoundComponent, title: 'Page Not Found - Miryalaguda Rice Industries' }
];