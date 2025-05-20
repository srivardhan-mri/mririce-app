// src/app/pages/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For @for, @if, etc.
import { RouterLink } from '@angular/router';   // For routerLink directive

// Optional: Import ValueItemComponent if you create it as a sub-component
// import { ValueItemComponent } from '../../components/value-item/value-item.component';

// Interfaces for data structures
interface PageHeaderData {
  title: string;
  description: string;
  // backgroundClass: string; // Or a direct backgroundImageUrl if you prefer dynamic styles
}

interface AboutSectionContent {
  title: string;
  paragraphs: string[];
  highlight?: { text: string; class?: string }; // For highlighted text within paragraphs
  imageUrl: string;
  imageAlt: string;
  layoutType: 'text-first' | 'image-first'; // To control image/text order
}

interface ValueData {
  iconClass: string; // e.g., 'fas fa-medal' for Font Awesome
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
    // ValueItemComponent, // Add if created
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  pageHeader: PageHeaderData = {
    title: "Our Story: A Legacy of Excellence in Miryalaguda",
    description: "Discover the journey of Miryalaguda Rice Industries, from humble beginnings to becoming a trusted name in premium quality rice, deeply rooted in family tradition and community."
    // backgroundClass: 'about-us-bg' // This class would be in styles.scss or about.component.scss
  };

  introSection: AboutSectionContent = {
    title: "Welcome to Miryalaguda Rice Industries (MRI)",
    paragraphs: [
      "Nestled in the heart of Telangana's renowned rice belt, Miryalaguda Rice Industries (MRI) stands as a testament to enduring quality and unwavering trust. For decades, we have dedicated ourselves to milling the finest rice, fostering long-term relationships with our valued customers and the local farming community that sustains us.",
      "Our journey is one of passion, precision, and a deep-seated commitment to delivering rice that not only nourishes but also delights with its superior taste and texture."
    ],
    imageUrl: "assets/images/mri-logo.png", // Assuming this is the intended image from about.html
    imageAlt: "Miryalaguda Rice Industries Logo",
    layoutType: 'text-first'
  };

  legacySection: AboutSectionContent = {
    title: "Our Journey: From Humble Beginnings to Milling Excellence",
    paragraphs: [
      "The story of Miryalaguda Rice Industries began in <strong>1984</strong>. What started as a very small-scale rice mill, driven by a family's passion for quality, has blossomed into a leading name in the region. This is a <strong>family legacy</strong>, built on hard work, integrity, and a relentless pursuit of excellence that has been passed down through generations.", // Using <strong> for highlight
      "Today, we are proud to operate with a milling capacity of <strong>400 tons per day</strong>, a significant milestone that reflects our growth, the trust our customers place in us, and our capability to meet large-scale demands without compromising the meticulous care we dedicate to every grain."
    ],
    imageUrl: "assets/images/mri-growth-legacy.png",
    imageAlt: "Legacy of Miryalaguda Rice Industries - Growth from 1984",
    layoutType: 'image-first'
  };

  communitySection: AboutSectionContent = {
    title: "Deeply Rooted in Miryalaguda's Rich Rice Heritage",
    paragraphs: [
      "Miryalaguda is not just our location; it's our home and the heart of our operations. We are immensely proud of our strong ties with the local community. The <strong>majority of our paddy is procured directly from local farmers</strong> in this renowned rice-growing region.", // Using <strong>
      "This close relationship allows us to ensure the freshest, highest-quality paddy for our mills while also supporting the livelihoods of the farmers who are the backbone of our industry. It's a partnership that enriches our rice and strengthens our community."
    ],
    imageUrl: "assets/images/mri-local-farmers-miryalaguda.png",
    imageAlt: "Local Paddy Procurement from Miryalaguda Farmers",
    layoutType: 'text-first'
  };

  expertiseSection: AboutSectionContent = {
    title: "The MRI Difference: Appreciated Quality & Finish",
    paragraphs: [
      "What truly sets Miryalaguda Rice Industries apart? It's the <strong>highly appreciated quality and finish</strong> of our rice. Our decades of experience, combined with modern milling techniques and a meticulous eye for detail, result in grains that are consistently perfect in texture, aroma, and appearance.", // Using <strong>
      "Whether it's our renowned JSR Steam Rice, the popular HMT varieties, or our nutritious Sona Masoori and Boiled Rice, the MRI seal guarantees a product that enhances every meal. This commitment to superior finish is a hallmark of our expertise and a promise to our customers."
    ],
    imageUrl: "assets/images/mri-rice-quality-finish.png",
    imageAlt: "Superior Quality and Finish of MRI Rice",
    layoutType: 'image-first'
  };

  coreValuesTitle: string = "Our Core Values: The MRI Promise";
  coreValues: ValueData[] = [
    {
      iconClass: "fas fa-medal", // Font Awesome class string
      title: "Unwavering Quality",
      text: "Quality isn't just a standard; it's our obsession. From paddy selection to the final polish, every step is managed with precision to ensure the superior taste and texture MRI rice is known for."
    },
    {
      iconClass: "fas fa-handshake-angle", // Updated icon from fa-handshake
      title: "Steadfast Trust",
      text: "We believe in transparency and integrity. Building and maintaining your trust through consistent product excellence and honest practices is fundamental to who we are."
    },
    {
      iconClass: "fas fa-truck-ramp-box", // Updated icon from fa-truck
      title: "Reliable Supply",
      text: "With our significant milling capacity and efficient logistics, you can count on us for timely and dependable delivery, ensuring your needs are always met."
    },
    {
      iconClass: "fas fa-headset",
      title: "Dedicated Support",
      text: "Our relationship doesn't end with a sale. We provide ongoing support and are always here to assist, ensuring a seamless experience with every interaction."
    }
  ];

  ctaAbout: CtaAboutData = {
    title: "Partner with a Legacy of Rice Excellence",
    text: "Experience the difference that decades of dedication, family values, and a commitment to superior quality can make. Miryalaguda Rice Industries is more than a supplier; we are your trusted partner in rice.",
    primaryButtonLink: "/products",
    primaryButtonText: "Explore Our Rice Selection",
    secondaryButtonLink: "/contact", // Or specific fragment like '/contact#bulk-enquiry'
    secondaryButtonText: "Discuss Your Requirements"
  };

  // Font Awesome icons for ValueItemComponent, if not handled by class string directly
  // faMedal = faMedal;
  // faHandshakeAngle = faHandshakeAngle;
  // faTruckRampBox = faTruckRampBox;
  // faHeadset = faHeadset;


  constructor() {
    // Ensure all image paths like "assets/images/mri-logo.png" are correct
    // and the images exist in your src/assets/images/ folder.
  }
}