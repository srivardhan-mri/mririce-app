// src/app/components/brand-profile-card/brand-profile-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Corrected import path for the Brand interface
import { Brand } from '../../services/brand.service'; // Was 'services/brand.service'

@Component({
  selector: 'app-brand-profile-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './brand-profile-card.component.html',
  styleUrls: ['./brand-profile-card.component.scss']
})
export class BrandProfileCardComponent {
  @Input() brand!: Brand;

  constructor() {}
}
