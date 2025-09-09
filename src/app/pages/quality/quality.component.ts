import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QualityProcessStepComponent, ProcessStepData } from '../../components/quality-process-step/quality-process-step.component';
import { SeoService } from '../../services/seo.service';

interface PageHeaderData {
  title: string;
  description: string;
}

interface QualityIntroData {
  title: string;
  text: string;
}

interface QualityConclusionData {
  title: string;
  text: string;
  buttonLink: string;
  buttonText: string;
}

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    QualityProcessStepComponent
  ],
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {

  pageHeader: PageHeaderData = {
    title: "Our Commitment to Consistent, High-Quality Rice",
    description: "For wholesalers and distributors, consistent quality means fewer returns and happier customers. Discover the rigorous process that makes MRI a trusted name in non-basmati rice across India."
  };

  qualityIntro: QualityIntroData = {
    title: "The MRI Standard: Your Guarantee of Excellence",
    text: "In the wholesale rice market, consistency is key. At Miryalguda Rice Industries, our multi-stage quality assurance process is designed to deliver a uniform, high-quality product in every single bag. This commitment to excellence is why our partners in <strong>Kerala, Maharashtra, Tamil Nadu, and Karnataka</strong> trust us for their bulk rice needs."
  };

  processSteps: ProcessStepData[] = [
    {
      stepNumber: 1,
      title: "Strategic Paddy Sourcing for Uniformity",
      description: "Our process begins with sourcing the best paddy from a network of trusted farmers in the Miryalguda region. This ensures a consistent raw material, which is the foundation of a uniform final product.",
      bulletPoints: [
        "Consistent grain maturity and size",
        "Optimal moisture content for milling",
        "Reduced impurities and foreign matter",
        "Traceability to the farm level"
      ],
      visualPlaceholderText: "Image: Sourcing high-quality paddy",
      visualType: 'image',
      layoutType: 'image-left'
    },
    {
      stepNumber: 2,
      title: "Advanced Milling for a Superior Finish",
      description: "Our state-of-the-art milling facility is equipped with modern machinery that allows us to produce a product with a superior finish and minimal broken grains. This means a more appealing product for your customers.",
      bulletPoints: [
        "Gentle dehusking to prevent grain damage",
        "Precision polishing for a uniform texture",
        "Automated sorting to remove imperfections",
        "Hygienic processing to ensure food safety"
      ],
      visualPlaceholderText: "Image: Modern rice milling machinery",
      visualType: 'image',
      layoutType: 'image-right'
    },
    {
      stepNumber: 3,
      title: "Rigorous, Multi-Point Quality Control",
      description: "Our dedicated quality control team inspects the rice at every stage of the milling process. This ensures that every batch meets our exacting standards for quality and consistency.",
      bulletPoints: [
        "Pre-milling analysis of paddy",
        "In-process monitoring of milling parameters",
        "Post-milling inspection of the final product",
        "Pre-packaging verification of quality"
      ],
      visualPlaceholderText: "Image: Quality control inspection",
      visualType: 'image',
      layoutType: 'image-left'
    },
    {
      stepNumber: 4,
      title: "Durable Packaging for a Longer Shelf Life",
      description: "We use high-quality, durable packaging materials to protect the rice during transit and storage. This ensures that the product reaches your customers in the best possible condition.",
      bulletPoints: [
        "Food-grade packaging materials",
        "Protection against moisture and pests",
        "Clear labeling for easy identification",
        "Customizable packaging options available"
      ],
      visualPlaceholderText: "Image: Packaged rice ready for dispatch",
      visualType: 'image',
      layoutType: 'image-right'
    }
  ];

  qualityConclusion: QualityConclusionData = {
    title: "Partner with a Supplier You Can Trust",
    text: "Our commitment to quality is a commitment to your success. When you partner with Miryalguda Rice Industries, you can be confident that you are getting a consistent, high-quality product that will satisfy your customers and grow your business.",
    buttonLink: "/contact",
    buttonText: "Request a Wholesale Quote"
  };

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setTitle('Quality Assurance & Rice Milling Process | MRI Rice Telangana');
    this.seoService.updateMetaDescription('Our state-of-the-art milling process and rigorous quality checks ensure that you receive only the best rice. Trust MRI for purity, taste, and reliable supply.');
    this.seoService.updateCanonicalLink('https://www.mririce.com/quality');
    this.seoService.updateOgUrl('https://www.mririce.com/quality');
    this.seoService.updateOgTitle('Quality Assurance & Rice Milling Process | MRI Rice Telangana');
    this.seoService.updateOgDescription('Our state-of-the-art milling process and rigorous quality checks ensure that you receive only the best rice. Trust MRI for purity, taste, and reliable supply.');
    this.seoService.updateOgImage('https://www.mririce.com/assets/images/quality-banner-inspection.webp');
  }
}