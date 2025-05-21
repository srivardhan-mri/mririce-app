// src/app/pages/about/about.component.ts
import { Component, OnInit, inject } from '@angular/core'; // Import OnInit and inject
import { Meta } from '@angular/platform-browser';      // Import Meta service
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Interfaces for data structures
interface PageHeaderData {
  title: string;
  description: string;
}

interface AboutSectionContent {
  title: string;
  paragraphs: string[];
  highlight?: { text: string; class?: string };
  imageUrl: string;
  imageAlt: string;
  layoutType: 'text-first' | 'image-first';
}

interface ValueData {
  iconClass: string;
  title: string;
  text: string;
}

interface CtaAboutData {
  title: string;
  text: string;
  primaryButtonLink: string;
  primaryButtonText: string;
  secondaryButtonLink: string;
  secondaryButtonText: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit { // Ensure OnInit is implemented

  private meta = inject(Meta); // Inject Meta service

  constructor() {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Learn about Miryalaguda Rice Industries (MRI Rice): our 30+ year legacy, commitment to quality rice milling in Telangana, and strong ties with local farmers. Discover our story.'
    });
    this.meta.updateTag({ property: 'og:title', content: 'About MRI Rice - Our Legacy & Quality Commitment | Miryalaguda' });
    this.meta.updateTag({ property: 'og:description', content: 'Discover the rich history and values of Miryalaguda Rice Industries, a leading rice mill in Telangana with a commitment to quality and community.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.mririce.com/about' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.mririce.com/assets/images/mri-logo.png' }); // Default logo, consider specific About Us banner
  }

  pageHeader: PageHeaderData = {
    title: "Our Story: A Legacy of Excellence from your Trusted Miryalaguda Rice Mill", // SEO: Added "Rice Mill"
    description: "Discover the journey of Miryalaguda Rice Industries (MRI Rice), from humble beginnings to becoming a trusted name in premium quality rice like Sona Masoori and JSR, deeply rooted in Telangana's family tradition and community." // SEO: Added "MRI Rice", "Sona Masoori and JSR", "Telangana's"
  };

  introSection: AboutSectionContent = {
    title: "Welcome to Miryalaguda Rice Industries (MRI) - Quality Rice Suppliers", // SEO: Added "Quality Rice Suppliers"
    paragraphs: [
      "Nestled in the heart of Telangana's renowned rice belt, Miryalaguda Rice Industries (MRI) stands as a testament to enduring quality and unwavering trust. For decades, we have dedicated ourselves to milling the finest rice, including popular varieties like <strong>JSR Steam Rice and Sona Masoori</strong>, fostering long-term relationships with our valued customers and the local farming community in Miryalaguda that sustains us.", // SEO: Added specific rice types
      "Our journey as a premier <strong>Telangana rice mill</strong> is one of passion, precision, and a deep-seated commitment to delivering rice that not only nourishes but also delights with its superior taste and texture." // SEO: Added "Telangana rice mill"
    ],
    imageUrl: "assets/images/mri-logo.png",
    imageAlt: "Miryalaguda Rice Industries (MRI) Logo - Trusted Rice Mill in Telangana", // SEO: Enhanced alt text
    layoutType: 'text-first'
  };

  legacySection: AboutSectionContent = {
    title: "Our Journey: From Humble Beginnings to Rice Milling Excellence in Telangana", // SEO: Added "in Telangana"
    paragraphs: [
      "The story of Miryalaguda Rice Industries began in <strong>1984</strong>. What started as a very small-scale <strong>rice mill in Miryalaguda</strong>, driven by a family's passion for quality, has blossomed into a leading name for <strong>premium rice in the region</strong>. This is a <strong>family legacy</strong>, built on hard work, integrity, and a relentless pursuit of excellence that has been passed down through generations.", // SEO: Added "rice mill in Miryalaguda", "premium rice"
      "Today, we are proud to operate with a milling capacity of <strong>400 tons per day</strong>, a significant milestone that reflects our growth, the trust our customers as <strong>rice wholesalers in Miryalaguda</strong> place in us, and our capability to meet large-scale demands for <strong>steam rice and boiled rice</strong> without compromising the meticulous care we dedicate to every grain." // SEO: Added "rice wholesalers in Miryalaguda", "steam rice and boiled rice"
    ],
    imageUrl: "assets/images/mri-growth-legacy.png",
    imageAlt: "Illustrated Legacy of Miryalaguda Rice Industries - Growth since 1984 as a Telangana Rice Mill", // SEO: Enhanced alt text
    layoutType: 'image-first'
  };

  communitySection: AboutSectionContent = {
    title: "Deeply Rooted in Miryalaguda's Rich Rice Heritage & Local Farmers", // SEO: Added "Local Farmers"
    paragraphs: [
      "Miryalaguda is not just our location; it's our home and the heart of our operations as leading <strong>rice suppliers in Telangana</strong>. We are immensely proud of our strong ties with the local community. The <strong>majority of our paddy is procured directly from local farmers</strong> in this renowned rice-growing region, ensuring fair prices and supporting local agriculture.", // SEO: Added "rice suppliers in Telangana"
      "This close partnership with <strong>Miryalaguda farmers</strong> allows us to ensure the freshest, highest-quality paddy (like Sona Masuri and HMT) for our mills while also supporting their livelihoods. It's a partnership that enriches our rice and strengthens our community commitment as a <strong>trusted rice mill</strong>." // SEO: Added "Miryalaguda farmers", rice types, "trusted rice mill"
    ],
    imageUrl: "assets/images/mri-local-farmers-miryalaguda.png",
    imageAlt: "Miryalaguda Rice Industries supporting Local Paddy Procurement from Miryalaguda Farmers", // SEO: Enhanced alt text
    layoutType: 'text-first'
  };

  expertiseSection: AboutSectionContent = {
    title: "The MRI Rice Difference: Appreciated Quality & Finish in Every Grain", // SEO: Added "Rice", "in Every Grain"
    paragraphs: [
      "What truly sets Miryalaguda Rice Industries apart? It's the <strong>highly appreciated quality and finish</strong> of our rice. Our decades of experience as <strong>rice manufacturers in India</strong>, combined with <strong>modern rice milling</strong> techniques and a meticulous eye for detail, result in grains that are consistently perfect in texture, aroma, and appearance.", // SEO: Added "rice manufacturers in India", "modern rice milling"
      "Whether it's our renowned <strong>JSR Steam Rice</strong>, the popular <strong>HMT Steam Rice</strong> varieties, our nutritious <strong>Sona Masoori Rice</strong>, or various <strong>Boiled Rice</strong> types (JSR Boiled, HMT Boiled, BPT Boiled), the MRI seal guarantees a product that enhances every meal. This commitment to superior finish is a hallmark of our expertise and a promise to our customers looking for <strong>quality rice suppliers</strong>." // SEO: Bolder product names, added "quality rice suppliers"
    ],
    imageUrl: "assets/images/mri-rice-quality-finish.png",
    imageAlt: "Superior Quality and Finish of MRI Rice - JSR, HMT, Sona Masoori from our Telangana Rice Mill", // SEO: Enhanced alt text
    layoutType: 'image-first'
  };

  coreValuesTitle: string = "Our Core Values: The MRI Rice Promise to Telangana and Beyond"; // SEO: Enhanced title
  coreValues: ValueData[] = [
    {
      iconClass: "fas fa-medal",
      title: "Unwavering Quality in Rice", // SEO: Added "in Rice"
      text: "Quality isn't just a standard for our Sona Masoori or JSR rice; it's our obsession. From paddy selection in Telangana to the final polish, every step is managed with precision to ensure the superior taste and texture MRI rice is known for." // SEO: Added rice types, location
    },
    {
      iconClass: "fas fa-handshake-angle",
      title: "Steadfast Trust with Rice Wholesalers", // SEO: Added "with Rice Wholesalers"
      text: "We believe in transparency and integrity as leading rice suppliers. Building and maintaining your trust through consistent product excellence and honest practices is fundamental to who we are." // SEO: Added "rice suppliers"
    },
    {
      iconClass: "fas fa-truck-ramp-box",
      title: "Reliable Rice Supply Across India", // SEO: Added "Rice Supply Across India"
      text: "With our significant milling capacity and efficient logistics, you can count on Miryalaguda Rice Industries for timely and dependable delivery of bulk rice orders, ensuring your needs are always met." // SEO: Added company name, "bulk rice orders"
    },
    {
      iconClass: "fas fa-headset",
      title: "Dedicated Support for Our Rice Partners", // SEO: Added "for Our Rice Partners"
      text: "Our relationship with our customers, from local Miryalaguda businesses to larger distributors, doesn't end with a sale. We provide ongoing support and are always here to assist, ensuring a seamless experience with every interaction." // SEO: Added context
    }
  ];

  ctaAbout: CtaAboutData = {
    title: "Partner with a Legacy of Rice Excellence in Miryalaguda", // SEO: Added "in Miryalaguda"
    text: "Experience the difference that decades of dedication, family values, and a commitment to superior quality rice can make. Miryalaguda Rice Industries is more than a supplier; we are your trusted partner for Sona Masoori, JSR, HMT, and Boiled Rice from Telangana.", // SEO: Added specific rice types and location
    primaryButtonLink: "/products",
    primaryButtonText: "Explore Our Rice Selection",
    secondaryButtonLink: "/contact",
    secondaryButtonText: "Discuss Your Requirements"
  };
}