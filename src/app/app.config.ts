// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
// import { provideClientHydration, withNoHttpTransferCache } from '@angular/platform-browser'; // Uncomment if you chose SSR
import { provideHttpClient, withFetch } from '@angular/common/http'; // If you need HttpClient for API calls

export const appConfig: ApplicationConfig = {
  providers: [
    // Configures Zone.js for change detection.
    // For zoneless applications, you might use provideExperimentalZonelessChangeDetection()
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Sets up the router with the defined routes.
    provideRouter(
      routes,
      // Enables binding route parameters to component inputs.
      withComponentInputBinding(),
      // Configures router features like scroll position restoration.
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Restores scroll position on back/forward navigation
        anchorScrolling: 'enabled',          // Enables scrolling to anchor fragments
      }),
      // Additional router configurations can be added here.
      // withRouterConfig({
      //   onSameUrlNavigation: 'reload', // Example: reload component on same URL navigation
      // })
    ),

    provideHttpClient(withFetch()), // Uncomment if your app will make HTTP requests (e.g., to a backend)

    // provideClientHydration(withNoHttpTransferCache()), // Uncomment if you enabled SSR and want hydration
                                                       // withNoHttpTransferCache can be useful for SSR setups
  ]
};