// src/app/pages/terms-conditions/terms-conditions.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For common directives if needed
import { RouterLink } from '@angular/router';   // For any internal links

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {
  // Placeholder for any dynamic data if needed in the future
  // effectiveDate: string = "May 20, 2025"; // Example

  constructor() { }
}
