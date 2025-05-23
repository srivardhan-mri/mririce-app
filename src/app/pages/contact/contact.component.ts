// src/app/pages/contact/contact.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

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
    RouterLink,
    FontAwesomeModule,
    SafeUrlPipe
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private meta = inject(Meta);
  private formBuilder = inject(FormBuilder);
  private route = inject(ActivatedRoute);

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
    title: "Contact Miryalaguda Rice Industries (MRI Rice)", // SEO: Added brand
    description: "We're here to help. Contact Miryalaguda Rice Industries for inquiries on JSR, HMT, Sona Masoori rice, bulk orders, or any information you need about our premium rice products from Telangana." // SEO: Added rice types and location
  };

  contactIntro: ContactIntroData = {
    title: "We'd Love to Hear From You - Your Trusted Telangana Rice Mill", // SEO: Added positioning
    text: "Whether you have a question about our diverse rice varieties like <strong>JSR Steam Rice, HMT Deluxe, or Super Fine Star Sona Masoori</strong>, need assistance with a <strong>bulk rice order</strong>, or want to learn more about partnering with Miryalaguda Rice Industries, our dedicated team is ready to assist you. Reach out to your <strong>Miryalaguda rice suppliers</strong> through any of the methods below, or use our inquiry form for a quick response." // SEO: Bolder product names, keywords
  };

  contactDetails: ContactDetailItem[] = [
    { icon: faMapMarkerAlt, label: 'Our Mill Address:', value: '<strong>Miryalaguda Rice Industries Pvt Ltd (MRI)</strong>,<br>Miryalaguda Industrial Area,<br>Miryalaguda, Telangana 508207, India', isLink: false }, // SEO: Ensure exact GMB Name & Address
    { icon: faPhone, label: 'Phone (Sales & Enquiries):', value: '+91 98663 98337', isLink: true, linkType: 'tel' },
    { icon: faEnvelope, label: 'Email Us for Rice Enquiries:', value: 'info@mririce.com', isLink: true, linkType: 'mailto' }, // SEO: Clarified purpose
    { icon: faClock, label: 'Business Hours:', value: 'Monday - Saturday: 9:00 AM - 6:00 PM IST<br>Sunday: Closed (Online inquiries welcome 24/7)', isLink: false } // SEO: Added IST, clarified online inquiries
  ];

  socialLinks: SocialLink[] = [
    // Add actual social media links here when available and update ariaLabel for SEO
    // { icon: faFacebookF, url: 'https://facebook.com/MRIRiceIndustries', ariaLabel: 'Miryalaguda Rice Industries on Facebook' },
    // { icon: faInstagram, url: 'https://instagram.com/MRIRice', ariaLabel: 'Miryalaguda Rice Industries on Instagram' },
    // { icon: faLinkedinIn, url: 'https://linkedin.com/company/miryalaguda-rice-industries', ariaLabel: 'Miryalaguda Rice Industries on LinkedIn' }
  ];

  inquiryTypes: string[] = [
    'General Inquiry about MRI Rice', // SEO: Added brand
    'Bulk Order Quotation (JSR, HMT, Sona Masoori, etc.)', // SEO: Added examples
    'Product Information Request (Steam Rice, Boiled Rice)', // SEO: Added examples
    'Distributorship/Partnership with Miryalaguda Rice Industries', // SEO: Added company name
    'Feedback/Suggestion',
    'Other Rice Related Questions' // SEO: Clarified
  ];

  mapSectionTitle: string = "Visit Our Rice Mill in Miryalaguda, Telangana"; // SEO: Added location
  mapIframeSrc: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15273.627374794723!2d79.53042728715816!3d16.855757199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a352f752fd6d37f%3A0x32ddc6df66cb678!2sMiryalaguda%20Rice%20Industries%20Pvt%20Ltd%20(MRI)!5e0!3m2!1sen!2sin!4v1747810194023!5m2!1sen!2sin"; // IMPORTANT: Replace YOUR_API_KEY and ensure query 'q' accurately points to your GMB listing. Using a direct embed link from Google Maps is better if no API key.

  constructor() {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Contact Miryalaguda Rice Industries (MRI Rice) for premium rice supplies. Inquire about JSR, HMT, Sona Masoori, bulk orders, or visit our rice mill in Miryalaguda, Telangana.'
    });
    this.meta.updateTag({ property: 'og:title', content: 'Contact MRI Rice - Bulk Rice Suppliers in Miryalaguda' });
    this.meta.updateTag({ property: 'og:description', content: 'Get in touch with Miryalaguda Rice Industries for your bulk rice needs. Find our address, phone, and email for inquiries.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.mririce.com/contact' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.mririce.com/assets/images/mri-logo.webp' }); // Default logo, consider a map snippet or contact banner

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
        const prefillText = `I am interested in your product: ${product} (from ${source || 'website'}). `; // Added source for context
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
      console.log("Contact form is invalid:", this.contactForm.value);
      return;
    }

    console.log("Contact form submitted successfully (simulated):", this.contactForm.value);
    this.formSuccess = true;
    const defaultInquiryType = this.inquiryTypes[0];
    this.contactForm.reset({
        inquiry_type: defaultInquiryType,
        name: '', email: '', phone: '', message: '' // Ensure all fields are explicitly reset
    });
    this.formSubmitted = false;
  }
}