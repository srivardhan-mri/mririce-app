// src/app/components/quality-process-step/quality-process-step.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // For @if, @for, [ngClass]
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // If using FontAwesome icons in steps
// Example: import { faSeedling } from '@fortawesome/free-solid-svg-icons';

// Interface for a single process step's data
export interface ProcessStepData {
  stepNumber: number;
  title: string;
  description: string;
  bulletPoints?: string[]; // Optional list of key points
  visualPlaceholderText: string; // Text for the placeholder image/icon area
  visualType: 'image' | 'icon'; // To differentiate if you use actual icons later
  iconClass?: string; // e.g., 'fas fa-cogs' if using FontAwesome classes
  layoutType: 'image-left' | 'image-right'; // To control visual/text order
}

@Component({
  selector: 'app-quality-process-step',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './quality-process-step.component.html',
  styleUrls: ['./quality-process-step.component.scss']
})
export class QualityProcessStepComponent {
  @Input() step!: ProcessStepData;

  // Example for FontAwesome icon object if you decide to pass them:
  // @Input() faIcon?: any;
  // faSeedling = faSeedling; // Example

  constructor() {}
}
