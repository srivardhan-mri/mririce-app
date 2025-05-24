// src/app/pages/quality/quality.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Import the reusable step component and its data interface
import { QualityProcessStepComponent, ProcessStepData } from '../../components/quality-process-step/quality-process-step.component';

interface PageHeaderData {
  title: string;
  description: string;
}

interface QualityIntroData {
  title: string;
  text: string;
}

interface QualityConclusionData {
  title: string; // Original HTML had <h3>, making it a title here
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
    QualityProcessStepComponent // Import the step component
  ],
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent {

  pageHeader: PageHeaderData = {
    title: "Our Unwavering Commitment to Quality",
    description: "At Miryalguda Rice Industries, quality isn't just a promise; it's the foundation of everything we do. Discover how we ensure excellence in every grain, from paddy to plate."
  };

  qualityIntro: QualityIntroData = {
    title: "The MRI Standard: Perfection in Every Grain",
    text: "The \"appreciated quality and finish\" of MRI rice, recognized by our valued customers, is no accident. It is the result of a meticulous, multi-stage quality assurance process that governs every aspect of our operations. We believe that exceptional rice begins with an uncompromising commitment to excellence, leveraging both time-honored practices of Miryalguda and modern technological precision."
  };

  processSteps: ProcessStepData[] = [
    {
      stepNumber: 1,
      title: "Superior Paddy Sourcing: The Foundation of Quality",
      description: "Our quest for quality starts at the very source. We partner closely with trusted local farmers in the fertile Miryalguda region, ensuring that only the finest, healthiest paddy is selected. Each batch undergoes initial inspection for:",
      bulletPoints: [
        "Grain maturity and integrity",
        "Moisture content",
        "Freedom from impurities",
        "Overall crop health"
      ],
      visualPlaceholderText: "Image: Premium Paddy Sourcing",
      visualType: 'image', // 'icon' if you use an icon
      layoutType: 'image-left' // Original HTML had visual first for step 1
    },
    {
      stepNumber: 2,
      title: "State-of-the-Art Milling: Precision and Purity",
      description: "Our milling facility combines decades of family expertise with advanced technology. We employ sophisticated machinery and processes to ensure:",
      bulletPoints: [
        "<strong>Gentle Dehusking:</strong> Preserving the bran layer for boiled rice or carefully removing it for raw and steam varieties.",
        "<strong>Precision Polishing:</strong> Achieving the perfect texture and sheen that our customers appreciate, without damaging the grain.",
        "<strong>Hygienic Environment:</strong> Maintaining the highest standards of cleanliness throughout the mill to prevent contamination.",
        "<strong>Specialized Processing:</strong> Dedicated lines and fine-tuned processes for Steam Rice (to retain aroma and texture) and Boiled Rice (to enhance nutritional value and cooking characteristics)."
      ],
      visualPlaceholderText: "Image: Advanced Milling Technology",
      visualType: 'image',
      layoutType: 'image-right' // Original HTML had visual second for step 2
    },
    {
      stepNumber: 3,
      title: "Rigorous Quality Control: Our Guarantee of Excellence",
      description: "Every grain of rice that carries the Miryalguda Rice Industries name passes through a stringent, multi-stage quality control protocol. Our dedicated QC team monitors key parameters at every critical point:",
      bulletPoints: [
        "<strong>Pre-Milling Analysis:</strong> Verifying paddy quality before processing.",
        "<strong>In-Process Monitoring:</strong> Continuous checks during milling for consistency in grain length, broken percentage, and color.",
        "<strong>Post-Milling Inspection:</strong> Final assessment of aroma, texture, purity, and cooking characteristics (through sample testing).",
        "<strong>Pre-Packaging Verification:</strong> Ensuring only the best rice makes it into our \"Super Fine Star\" and \"MRI Brand\" bags."
      ],
      visualPlaceholderText: "Image: Multi-Stage QC Checks",
      visualType: 'image',
      layoutType: 'image-left'
    },
    {
      stepNumber: 4,
      title: "Optimal Storage & Hygienic Packaging",
      description: "To preserve the freshness, aroma, and nutritional integrity of our rice, we adhere to best practices in storage and packaging:",
      bulletPoints: [
        "<strong>Climate-Controlled Storage:</strong> Our warehouses maintain optimal conditions to protect against pests and moisture.",
        "<strong>Durable, Food-Grade Packaging:</strong> We use high-quality packaging materials that safeguard the rice during transit and storage.",
        "<strong>Automated & Hygienic Packing Lines:</strong> Minimizing human contact to ensure product purity right up to dispatch.",
        "<strong>Clear Product Information:</strong> All bags are clearly labeled with variety, grade, and manufacturing details for complete traceability."
      ],
      visualPlaceholderText: "Image: Hygienic Storage & Packaging",
      visualType: 'image',
      layoutType: 'image-right'
    }
  ];

  qualityConclusion: QualityConclusionData = {
    title: "Your Assurance of Superior Rice",
    text: "The \"appreciated quality and finish\" of MRI rice is a direct result of this comprehensive quality assurance system. When you choose Miryalguda Rice Industries, you choose rice that has been cultivated, milled, and packaged with an unwavering dedication to excellence. We invite you to experience the MRI difference.",
    buttonLink: "/products",
    buttonText: "View Our Quality Rice Selection"
  };

  constructor() {}
}
