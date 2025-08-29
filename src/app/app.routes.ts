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
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

export const routes: Routes = [
  // Redirect empty path to '/home'
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Define routes for each page with SEO-optimized titles
  {
    path: 'home',
    component: HomeComponent,
    title: 'Miryalguda Rice Industries (MRI) - Trusted Rice Mill in Telangana',
    data: {
      description: 'Your trusted source for premium non-basmati rice. As a leading rice mill in Miryalguda, we offer Sona Masoori, JSR, HMT, and more for wholesale and retail across India.'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About MRI Rice - Our Legacy & Quality Commitment | Miryalguda',
    data: {
      description: 'With over 40 years of experience, Miryalguda Rice Industries is built on a legacy of trust and quality. Learn about our commitment to providing the finest non-basmati rice.'
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Premium Rice Products | JSR, HMT, Sona Masoori | MRI Rice',
    data: {
      description: 'Explore our wide range of high-quality non-basmati rice varieties, including JSR, HMT, and Sona Masoori. We provide reliable supply for bulk and wholesale orders.'
    }
  },
  {
    path: 'brands',
    component: BrandsComponent,
    title: 'Our Rice Brands - Super Fine Star & More | MRI Rice Miryalguda',
    data: {
      description: 'Discover our signature rice brands like Super Fine Star, known for their consistent quality and taste. We are a leading rice supplier in Telangana, serving clients nationwide.'
    }
  },
  {
    path: 'quality',
    component: QualityComponent,
    title: 'Quality Assurance & Rice Milling Process | MRI Rice Telangana',
    data: {
      description: 'Our state-of-the-art milling process and rigorous quality checks ensure that you receive only the best rice. Trust MRI for purity, taste, and reliable supply.'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact MRI Rice - Bulk Rice Suppliers in Miryalguda',
    data: {
      description: 'Contact us for wholesale and bulk rice inquiries. As a top rice mill in Miryalguda, we supply to Kerala, Maharashtra, Tamil Nadu, Karnataka, and across India.'
    }
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'Privacy Policy | Miryalguda Rice Industries Pvt Ltd',
    data: {
      description: 'Read the privacy policy for Miryalguda Rice Industries Pvt Ltd. We are committed to protecting your data and privacy.'
    }
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent,
    title: 'Terms & Conditions | Miryalguda Rice Industries Pvt Ltd',
    data: {
      description: 'Review the terms and conditions for using the Miryalguda Rice Industries website and services.'
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'MRI Rice Blog - Insights on Rice, Milling & Industry News',
    data: {
      description: 'Stay updated with the latest news, articles, and insights from Miryalguda Rice Industries. Learn about rice varieties, quality processes, and industry trends.'
    }
  },
  {
    path: 'blog/:slug',
    component: BlogDetailComponent,
    // Title and description will be set dynamically by the BlogDetailComponent
  },

  // Optional: Wildcard route for a 404 Page Not Found component
  // Make sure this is the LAST route in the array
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 - Page Not Found | Miryalguda Rice Industries',
    data: {
      description: 'The page you are looking for could not be found. Please return to the homepage of Miryalguda Rice Industries.'
    }
  }
];