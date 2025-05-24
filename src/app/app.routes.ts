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

  // Define routes for each page with SEO-optimized titles
  {
    path: 'home',
    component: HomeComponent,
    title: 'Miryalguda Rice Industries (MRI) - Trusted Rice Mill in Telangana'  // SEO Optimized
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About MRI Rice - Our Legacy & Quality Commitment | Miryalguda' // SEO Optimized
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Premium Rice Products | JSR, HMT, Sona Masoori | MRI Rice' // SEO Optimized
  },
  {
    path: 'brands',
    component: BrandsComponent,
    title: 'Our Rice Brands - Super Fine Star & More | MRI Rice Miryalguda' // SEO Optimized
  },
  {
    path: 'quality',
    component: QualityComponent,
    title: 'Quality Assurance & Rice Milling Process | MRI Rice Telangana' // SEO Optimized
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact MRI Rice - Bulk Rice Suppliers in Miryalguda' // SEO Optimized
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'Privacy Policy | Miryalguda Rice Industries Pvt Ltd' // SEO Optimized
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent,
    title: 'Terms & Conditions | Miryalguda Rice Industries Pvt Ltd' // SEO Optimized
  },

  // Optional: Wildcard route for a 404 Page Not Found component
  // Make sure this is the LAST route in the array
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 - Page Not Found | Miryalguda Rice Industries' // SEO Optimized
  }
];