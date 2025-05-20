// src/app/pages/privacy-policy/privacy-policy.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For common directives if needed
import { RouterLink } from '@angular/router';   // For any internal links

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  // Data for the page, if any dynamic parts are needed.
  // For a static privacy policy, most content will be in the HTML.

  // Example: if you had a dynamic effective date or page title managed here
  // effectiveDate: string = "TBD [Will be Updated]"; // From original HTML
  // pageTitle: string = "Privacy Policy for Miryalaguda Rice Industries";

  constructor() { }
}
