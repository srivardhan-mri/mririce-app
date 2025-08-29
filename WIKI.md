# Mririce-App Wiki

Welcome to the Mririce-App project wiki! This document provides a comprehensive overview of the project's architecture, components, services, and development guidelines. It is intended to help developers understand the codebase and contribute effectively.

## 1. Project Overview

Mririce-App is the official web application for Miryalguda Rice Industries. It serves as an informational hub, showcasing products, company details, quality standards, and providing contact methods. The application is built using Angular CLI version 19.2.3.

## 2. Tech Stack

The project primarily uses:
* **Angular:** ^19.2.0 (Core framework)
* **TypeScript:** ~5.7.2 (Primary programming language)
* **RxJS:** ~7.8.0 (For reactive programming)
* **SCSS:** For styling
* **Font Awesome:** For icons

## 3. Project Structure

The project follows a standard Angular CLI structure:

*   `angular.json`: Workspace and project-specific configuration for the Angular CLI.
*   `package.json`: Lists project dependencies and npm scripts.
*   `tsconfig.json`: TypeScript compiler configuration.
*   `src/`: Main application code.
    *   `index.html`: The main HTML page.
    *   `main.ts`: The main entry point for the application.
    *   `styles.scss`: Global stylesheets.
    *   `assets/`: Static assets like images and fonts.
    *   `app/`: Core application logic and UI.
        *   `components/`: Reusable UI components.
        *   `layout/`: Components for the overall application structure (header, footer).
        *   `pages/`: Feature components representing different pages.
        *   `pipes/`: Custom data transformation pipes.
        *   `services/`: Injectable services for shared functionality.
*   `docs/`: Contains the built version of the application for deployment.

## 4. Core Concepts

### `app.component.ts`

The root component of the application, serving as the main shell. It includes the header, footer, and a router outlet for displaying page components.

### `app.config.ts`

Defines application-level providers and configurations, including the Angular router setup.

### `app.routes.ts`

Defines the application's routing structure, mapping URL paths to their corresponding components.

## 5. Components

### Layout Components (`src/app/layout/`)

*   **`header/header.component.ts`:** Displays the main site navigation and logo. Handles responsive mobile navigation.
*   **`footer/footer.component.ts`:** Displays the site footer with contact information, social media links, and copyright details.

### Page Components (`src/app/pages/`)

Each page component corresponds to a major section of the website:

*   `home/home.component.ts`: The landing page.
*   `about/about.component.ts`: Company history and values.
*   `products/products.component.ts`: Displays all rice products.
*   `brands/brands.component.ts`: Showcases the company's brands.
*   `quality/quality.component.ts`: Details the quality assurance process.
*   `contact/contact.component.ts`: Contact form and information.
*   `privacy-policy/privacy-policy.component.ts`: Privacy policy page.
*   `terms-conditions/terms-conditions.component.ts`: Terms and conditions page.
*   `not-found/not-found.component.ts`: 404 page.

### Reusable UI Components (`src/app/components/`)

*   `product-card/product-card.component.ts`: Displays a single product.
*   `brand-profile-card/brand-profile-card.component.ts`: Displays a single brand profile.
*   `quality-process-step/quality-process-step.component.ts`: A step in the quality process.

## 6. Services (`src/app/services/`)

*   **`product.service.ts`:** Manages and provides product data.
*   **`brand.service.ts`:** Manages and provides brand data.
*   **`contact.service.ts`:** Intended for contact form submission logic.
*   **`seo.service.ts`:** Manages dynamic meta tags for SEO.
*   **`structured-data.service.ts`:** Injects structured data (JSON-LD) into the application.

## 7. Development & Build

Key scripts in `package.json`:

*   `npm start`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm test`: Runs unit tests.

This wiki provides a high-level overview of the project. For more detailed information, please refer to the source code and inline comments.
