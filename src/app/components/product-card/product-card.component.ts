// src/app/components/product-card/product-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf, [ngClass], etc.
import { RouterLink } from '@angular/router';   // For the "Enquire Now" button

// Import the Product interface from your service file
// Ensure this path is correct relative to this component's location
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-product-card', // Used to embed this component in other templates
  standalone: true,
  imports: [CommonModule, RouterLink], // Necessary modules for the template
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  // @Input() allows parent components to pass data into this 'product' property.
  // The '!' (definite assignment assertion) tells TypeScript that 'product'
  // will definitely be assigned by the time it's used (by the parent component).
  @Input() product!: Product;

  constructor() {}
}
