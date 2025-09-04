import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { StructuredDataService } from '../../services/structured-data.service';
import { ContactService } from '../../services/contact.service';

// Interfaces
interface PageHeaderData {
  title: string;
  description: string;
}

interface ContactIntroData {
  title: string;
  text: string;
}

interface ContactDetailItem {
  icon: any;
  label: string;
  value: string;
  isLink: boolean;
  linkType?: 'tel' | 'mailto';
}

interface SocialLink {
  icon: any;
  url: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SafeUrlPipe
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private structuredDataService = inject(StructuredDataService);
  private formBuilder = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private contactService = inject(ContactService);

  contactForm!: FormGroup;
  formSubmitted = false;
  formSuccess = false;
  formError = false;

  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faClock = faClock;
  faWhatsapp = faWhatsapp;

  pageHeader: PageHeaderData = {
    title: "Contact Miryalguda Rice Industries (MRI Rice)",
    description: "We're here to help. Contact Miryalguda Rice Industries for inquiries on JSR, HMT, Sona Masoori rice, bulk orders, or any information you need about our premium rice products from Telangana."
  };

  contactIntro: ContactIntroData = {
    title: "We'd Love to Hear From You - Your Trusted Telangana Rice Mill",
    text: "Whether you have a question about our diverse rice varieties like <strong>JSR Steam Rice, HMT Deluxe, or Super Fine Star Sona Masoori</strong>, need assistance with a <strong>bulk rice order</strong>, or want to learn more about partnering with Miryalguda Rice Industries, our dedicated team is ready to assist you. Reach out to your <strong>Miryalguda rice suppliers</strong> through any of the methods below, or use our inquiry form for a quick response."
  };

  contactDetails: ContactDetailItem[] = [
    { icon: faMapMarkerAlt, label: 'Our Mill Address:', value: '<strong>Miryalguda Rice Industries Pvt Ltd (MRI)</strong>,<br>Miryalguda Industrial Area,<br>Miryalguda, Telangana 508207, India', isLink: false },
    { icon: faPhone, label: 'Phone (Sales & Enquiries):', value: '+91 98663 98337', isLink: true, linkType: 'tel' },
    { icon: faEnvelope, label: 'Email Us for Rice Enquiries:', value: 'info@mririce.com', isLink: true, linkType: 'mailto' },
    { icon: faClock, label: 'Business Hours:', value: 'Monday - Saturday: 9:00 AM - 6:00 PM IST<br>Sunday: Closed (Online inquiries welcome 24/7)', isLink: false }
  ];

  socialLinks: SocialLink[] = [
    // Add actual social media links here when available and update ariaLabel for SEO
    // { icon: faFacebookF, url: 'https://facebook.com/MRIRiceIndustries', ariaLabel: 'Miryalguda Rice Industries on Facebook' },
    // { icon: faInstagram, url: 'https://instagram.com/MRIRice', ariaLabel: 'Miryalguda Rice Industries on Instagram' },
    // { icon: faLinkedinIn, url: 'https://linkedin.com/company/Miryalguda-rice-industries', ariaLabel: 'Miryalguda Rice Industries on LinkedIn' }
  ];

  inquiryTypes: string[] = [
    'General Inquiry about MRI Rice',
    'Bulk Order Quotation (JSR, HMT, Sona Masoori, etc.)',
    'Product Information Request (Steam Rice, Boiled Rice)',
    'Distributorship/Partnership with Miryalguda Rice Industries',
    'Feedback/Suggestion',
    'Other Rice Related Questions'
  ];

  mapSectionTitle: string = "Visit Our Rice Mill in Miryalguda, Telangana";
  mapIframeSrc: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15273.627374794723!2d79.53042728715816!3d16.855757199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a352f752fd6d37f%3A0x32ddc6df66cb678!2sMiryalguda%20Rice%20Industries%20Pvt%20Ltd%20(MRI)!5e0!3m2!1sen!2sin!4v1747810194023!5m2!1sen!2sin";

  constructor() {}

  ngOnInit(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Miryalguda Rice Industries Pvt Ltd (MRI)",
      "image": "https://www.mririce.com/assets/images/mri-logo.webp",
      "@id": "https://www.mririce.com/contact",
      "url": "https://www.mririce.com/contact",
      "telephone": "+919866398337",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Miryalguda Industrial Area",
        "addressLocality": "Miryalaguda",
        "postalCode": "508207",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.855757199999996,
        "longitude": 79.53042728715816
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        // Add social media links here if available
        // "https://facebook.com/MRIRiceIndustries",
        // "https://instagram.com/MRIRice",
        // "https://linkedin.com/company/Miryalguda-rice-industries"
      ]
    };
    this.structuredDataService.addStructuredData(structuredData);

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      inquiry_type: [this.inquiryTypes[0], Validators.required],
      message: ['', Validators.required]
    });

    this.route.queryParams.subscribe(params => {
      const product = params['product'];
      const source = params['source'];

      if (product) {
        const currentMessage = this.contactForm.get('message')?.value || '';
        const prefillText = `I am interested in your product: ${product} (from ${source || 'website'}). `;
        this.contactForm.get('message')?.setValue(prefillText + currentMessage);

        if (this.inquiryTypes.includes('Product Information Request (Steam Rice, Boiled Rice)')) {
            this.contactForm.get('inquiry_type')?.setValue('Product Information Request (Steam Rice, Boiled Rice)');
        } else if (this.inquiryTypes.includes('Bulk Order Quotation (JSR, HMT, Sona Masoori, etc.)')) {
             this.contactForm.get('inquiry_type')?.setValue('Bulk Order Quotation (JSR, HMT, Sona Masoori, etc.)');
        }
      }
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit(): void {
    this.formSubmitted = true;
    this.formSuccess = false;
    this.formError = false;

    if (this.contactForm.invalid) {
      this.formError = true;
      return;
    }

    this.contactService.send(this.contactForm.value).subscribe({
      next: () => {
        this.formSuccess = true;
        const defaultInquiryType = this.inquiryTypes[0];
        this.contactForm.reset({
            inquiry_type: defaultInquiryType,
            name: '', email: '', phone: '', message: ''
        });
        this.formSubmitted = false;
      },
      error: (err) => {
        this.formError = true;
        console.error('Error sending contact form', err);
      }
    });
  }
}