// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Interfaces
interface HeroData {
  titleLine1: string;
  highlight: string;
  titleLine2: string;
  subtitle: string;
  backgroundImageUrl: string;
  altText?: string;
}

interface UspData {
  iconUrl: string;
  altText: string;
  title: string;
  text: string;
}

interface FeaturedBrandData {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  buttonText: string;
  fragment: string;
}

interface CommitmentData {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  backgroundImageUrl: string;
  altText?: string;
}

interface CtaFinalData {
  title: string;
  text: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  primaryButtonFragment?: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Welcome to Miryalaguda Rice Industries (MRI), your trusted rice mill in Telangana. Discover premium quality JSR, HMT, Sona Masoori, and boiled rice. Reliable suppliers for bulk orders.'
    });
    this.meta.updateTag({ property: 'og:title', content: 'Miryalaguda Rice Industries (MRI) - Trusted Rice Mill in Telangana' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore premium rice varieties from MRI Rice, your reliable partner in Miryalaguda for quality and bulk supply.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.mririce.com/home' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.mririce.com/assets/images/mri-logo.png' }); // Default logo, consider a specific home banner
  }

  hero: HeroData = {
    titleLine1: 'Miryalaguda Rice Industries:',
    highlight: 'Quality Rice,',
    titleLine2: 'Trusted Supply',
    subtitle: 'Your premier partner for the finest Sona Masoori, JSR steam, and boiled rice varieties, cultivated with care and milled to perfection in the heart of Telangana.', // SEO: Added specific rice types
    backgroundImageUrl: 'assets/images/hero-banner-miryalaguda.jpeg',
    altText: 'Lush green paddy fields under a blue sky, illustrating rice cultivation at Miryalaguda Rice Industries.' // SEO: Enhanced alt text
  };

  usps: UspData[] = [
    {
      iconUrl: 'assets/images/usp-quality-grains.png',
      altText: 'Icon representing Uncompromising Quality Rice from MRI Rice', // SEO: Enhanced alt text
      title: 'Uncompromising Quality',
      text: 'From paddy procurement from Telangana farms to final packaging, we ensure the highest standards for every premium rice grain, including popular varieties like JSR Steam Rice and Sona Masoori.' // SEO: Enhanced text
    },
    {
      iconUrl: 'assets/images/usp-trust-handshake.png',
      altText: 'Icon for Decades of Rice Milling Expertise at MRI Rice in Miryalaguda', // SEO: Enhanced alt text
      title: 'Decades of Expertise',
      text: 'With over 30 years as a leading rice mill in Miryalaguda, our experience guarantees excellence and reliability as trusted rice suppliers in Telangana.' // SEO: Enhanced text
    },
    {
      iconUrl: 'assets/images/usp-reliable-supply.png',
      altText: 'Icon for Trusted & Timely Rice Supply by MRI for bulk orders', // SEO: Enhanced alt text
      title: 'Trusted & Timely Supply',
      text: 'Efficient supply chain management to meet your bulk rice supplier requirements in Telangana and across India on schedule.' // SEO: Enhanced text
    }
  ];

  featuredBrands: FeaturedBrandData[] = [
    {
      imageUrl: 'assets/images/SuperFineStarMRI_WadaKolamJeeraRice_DarkGreen.jpg',
      altText: 'Bag of Super Fine Star Sona Masoori Rice by Miryalaguda Rice Industries', // SEO: Enhanced alt text
      title: 'Super Fine Star',
      description: 'Our flagship brand from Miryalaguda Rice Industries, known for its aromatic, long-grain Sona Masoori steam rice. Perfect for daily meals and special occasions, Super Fine Star Rice is a mark of quality.', // SEO: Enhanced text
      buttonText: 'Discover Super Fine Star',
      fragment: 'super-fine-star'
    },
    {
      imageUrl: 'assets/images/MRI_JSR_Purple.jpg',
      altText: 'MRI Gold JSR Steam Rice from Miryalaguda Rice Industries', // SEO: Enhanced alt text
      title: 'MRI Gold (JSR Steam)',
      description: 'Premium JSR steam rice from our Miryalaguda rice mill, offering excellent cooking quality, taste, and texture. MRI Gold is a preferred choice for households and caterers seeking top-tier rice.', // SEO: Enhanced text
      buttonText: 'Explore MRI Gold JSR',
      fragment: 'mri-gold-jsr'
    }
  ];

  commitment: CommitmentData = {
    title: 'Our Commitment to Excellence & Sustainability in Rice Milling', // SEO: Enhanced title
    text: 'At Miryalaguda Rice Industries, we are dedicated to not only providing superior quality rice like JSR and Sona Masoori, but also to fostering sustainable agricultural practices and supporting our local farming communities in Telangana.', // SEO: Enhanced text
    buttonText: 'Learn About Our Values',
    buttonLink: '/about',
    backgroundImageUrl: 'assets/images/commitment-collage.jpg',
    altText: 'Hands holding freshly harvested rice grains, symbolizing Miryalaguda Rice Industries commitment to quality and sustainability.' // SEO: Enhanced alt text
  };

  ctaFinal: CtaFinalData = {
    title: 'Partner with Miryalaguda’s Leading Rice Supplier for Bulk Orders', // SEO: Enhanced title
    text: 'Whether you are a wholesaler, distributor, or require bulk rice for your business in Telangana or India, MRI Rice is your trusted source for consistent quality Sona Masoori, JSR, and HMT rice. Get in touch to discuss your requirements.', // SEO: Enhanced text
    primaryButtonText: 'Enquire for Bulk Orders',
    primaryButtonLink: '/contact',
    primaryButtonFragment: 'bulk-enquiry',
    secondaryButtonText: 'View All Our Rice Varieties',
    secondaryButtonLink: '/products'
  };

}