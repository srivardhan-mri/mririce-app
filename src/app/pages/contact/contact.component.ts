// src/app/pages/contact/contact.component.ts
import { Component, OnInit, inject } from '@angular/core'; // Added inject
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router'; // ActivatedRoute to read query params
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // For reactive forms

// Import Font Awesome icons if you use them for contact details
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Optional: Contact Service for form submission logic
// import { ContactService } from '../../services/contact.service';

import { SafeUrlPipe } from '../../pipes/safe-url.pipe'; // Adjust path if needed
 
interface PageHeaderData {
  title: string;
  description: string;
}

interface ContactIntroData {
  title: string;
  text: string;
}

interface ContactDetailItem {
  icon: any; // Font Awesome IconDefinition
  label: string;
  value: string;
  isLink: boolean;
  linkType?: 'tel' | 'mailto' | 'url';
}

interface SocialLink {
  ariaLabel: string;
  icon: any; // Font Awesome IconDefinition
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule, // Add ReactiveFormsModule for the contact form
    FontAwesomeModule,
    SafeUrlPipe
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  pageHeader: PageHeaderData = {
    title: "Get In Touch With Us",
    description: "We're here to help! Whether you have a question about our premium rice varieties, need support, or want to discuss bulk orders, our team at Miryalaguda Rice Industries is ready to assist."
  };

  contactIntro: ContactIntroData = {
    title: "We'd Love to Hear From You",
    text: "Your inquiries are important to us. Please use the form below or contact us directly through phone, email, or by visiting our mill. We are committed to providing reliable support and fostering long-term relationships."
  };

  contactDetails: ContactDetailItem[] = [
    {
      icon: faMapMarkerAlt,
      label: "Address:",
      value: "VG4X+8Q5, Miryalaguda Industrial Area,<br>Miryalaguda, Telangana 508207, India",
      isLink: false
    },
    {
      icon: faPhoneAlt,
      label: "Phone:",
      value: "+91 98663 98337",
      isLink: true,
      linkType: 'tel'
    },
    {
      icon: faEnvelope,
      label: "Email:",
      value: "info@mririce.com",
      isLink: true,
      linkType: 'mailto'
    },
    {
      icon: faClock,
      label: "Business Hours:",
      value: "Monday - Saturday: 9:00 AM - 6:00 PM<br>Sunday: Closed",
      isLink: false
    }
  ];

  socialLinks: SocialLink[] = [
    { ariaLabel: "Facebook", icon: faFacebookF, url: "#" }, // Replace # with actual URL
    { ariaLabel: "Instagram", icon: faInstagram, url: "#" }, // Replace # with actual URL
    { ariaLabel: "LinkedIn", icon: faLinkedinIn, url: "#" }  // Replace # with actual URL
  ];

  mapSectionTitle: string = "Visit Us in Miryalaguda";
  // IMPORTANT: Replace this iframeSrc with your actual Google Maps embed URL.
  // The one from your original HTML was a placeholder/internal URL.
  // Go to Google Maps, find your location, click "Share", then "Embed a map", and copy the src value.
  mapIframeSrc: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.709478205764!2d79.59858067590719!3d16.87826088398674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb02d8aaaaaaab%3A0x1c8ed899a3294788!2sMiryalaguda%20Rice%20Industries!5e0!3m2!1sen!2sin!4v1716200000000!5m2!1sen!2sin"; // Replace with actual embed SRC

  contactForm!: FormGroup; // Definite assignment assertion, will be initialized in constructor/ngOnInit
  formSubmitted: boolean = false;
  formSuccess: boolean = false;
  formError: boolean = false;

  // Inject FormBuilder and ActivatedRoute
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  // private contactService = inject(ContactService); // Optional: if using a service for submission

  inquiryTypes: string[] = [
    "General Question",
    "Product Information",
    "Bulk Order / Wholesale",
    "Export Enquiry",
    "Feedback",
    "Other"
  ];

  constructor() {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required], // Add more specific phone validation if needed
      inquiry_type: [this.inquiryTypes[0], Validators.required], // Default to first option
      message: ['', Validators.required]
    });

    // Check for 'product' query parameter to prefill inquiry type or message
    this.route.queryParamMap.subscribe(params => {
      const productInquiry = params.get('product');
      if (productInquiry) {
        this.contactForm.patchValue({
          inquiry_type: 'Product Information', // Or "Bulk Order / Wholesale"
          message: `I am interested in your product: ${productInquiry}. Please provide more details.`
        });
      }

      // Check for 'bulk-enquiry' fragment (though this is usually for scrolling, not form prefill)
      // The fragment "bulk-enquiry" is handled by anchor scrolling in app.config.ts
    });
  }

  // Getter for easy access to form controls in the template
  get f() { return this.contactForm.controls; }

  onSubmit(): void {
    this.formSubmitted = true;
    this.formSuccess = false;
    this.formError = false;

    if (this.contactForm.invalid) {
      this.formError = true;
      // Mark all fields as touched to display validation errors
      Object.values(this.contactForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    // Process form submission
    console.log("Contact Form Submitted:", this.contactForm.value);
    // Here you would typically send the data to a backend service
    // For example:
    // this.contactService.submitEnquiry(this.contactForm.value).subscribe({
    //   next: (response) => {
    //     this.formSuccess = true;
    //     this.contactForm.reset({ inquiry_type: this.inquiryTypes[0] }); // Reset form with default inquiry type
    //     this.formSubmitted = false; // Reset submitted flag
    //   },
    //   error: (error) => {
    //     this.formError = true;
    //     console.error("Error submitting form:", error);
    //   }
    // });

    // For now, just simulate success:
    this.formSuccess = true;
    this.contactForm.reset({ inquiry_type: this.inquiryTypes[0] });
    this.formSubmitted = false;

    // Hide success/error message after some time
    setTimeout(() => {
      this.formSuccess = false;
      this.formError = false;
    }, 5000);
  }
}
