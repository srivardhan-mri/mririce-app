// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // For displaying routed components

// Import your layout components
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root', // This selector is used in src/index.html
  standalone: true,
  imports: [
    RouterOutlet,     // Make RouterOutlet available in the template
    HeaderComponent,  // Make HeaderComponent available
    FooterComponent   // Make FooterComponent available
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // You can have a title property, but it's not strictly necessary for the app shell.
  // The page titles are being set by the router configuration.
  title = 'Miryalaguda Rice Industries'; // Or 'mririce-app' or any other app title
}