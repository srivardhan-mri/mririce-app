# Wiki: Mririce-App Wiki

Welcome to the Mririce-App project! This document serves as a wiki to understand the project structure, components, services, and overall architecture of this Angular application.

## 1. Project Overview

Mririce-App is the official web application for Miryalguda Rice Industries. It serves as an informational hub, showcasing products, company details, quality standards, and providing contact methods. The application is built using Angular CLI version 19.2.3.

## 2. Tech Stack

The project primarily uses:
* **Angular:** ^19.2.0 (Core framework)
* **TypeScript:** ~5.7.2 (Primary programming language)
* **RxJS:** ~7.8.0 (For reactive programming)
* **SCSS:** For styling (Default style preprocessor as per `angular.json`)
* **Font Awesome:** For icons (@fortawesome/angular-fontawesome, @fortawesome/fontawesome-svg-core, @fortawesome/free-brands-svg-icons, @fortawesome/free-solid-svg-icons)
* **Zone.js:** ~0.15.0 (Angular's change detection mechanism)

## 3. Project Structure

The project follows a standard Angular CLI structure:

* `angular.json`: Contains workspace and project-specific configuration for the Angular CLI, including build and serve options, default schematics, and test configurations.
* `package.json`: Lists project dependencies, devDependencies, and npm scripts for common tasks like starting the development server, building, and testing.
* `tsconfig.json`, `tsconfig.app.json`, `tsconfig.spec.json`: TypeScript compiler configuration files for the project, application, and tests respectively.
* `src/`: Contains the main application code.
    * `index.html`: The main HTML page that is served.
    * `main.ts`: The main entry point for the application, responsible for bootstrapping the `AppComponent`.
    * `styles.scss`: Global stylesheets for the application.
    * `assets/`: Static assets like images and fonts.
    * `app/`: Contains the core application logic and UI.
        * `app.component.ts`: The root component of the application.
        * `app.config.ts`: Application-level configuration, including router setup.
        * `app.routes.ts`: Defines the main application routes.
        * `components/`: Reusable UI components shared across different parts of the application.
        * `layout/`: Components responsible for the overall structure of the application (e.g., header, footer).
        * `pages/`: Feature components representing different pages/views of the application.
        * `pipes/`: Custom data transformation pipes.
        * `services/`: Injectable services providing shared functionality or data access.
        * `*.model.ts`: (e.g. `product.model.ts`, `brand.model.ts`) These files define simple classes, likely intended for data modeling, although the current services define their interfaces directly.
* `docs/`: Contains the deployed/built version of the application, as specified by `outputPath` in `angular.json`.
* `.vscode/`: Contains VS Code specific settings.
    * `extensions.json`: Recommends VS Code extensions for the project.
    * `launch.json`: Defines debug configurations for launching the app (`ng serve`) and running tests (`ng test`).

## 4. Core Concepts & Configuration

### `app.component.ts`
The root component (`AppComponent`) acts as the main application shell.
* **Selector:** `app-root` (used in `src/index.html`)
* **Standalone:** `true`
* **Imports:** `RouterOutlet`, `HeaderComponent`, `FooterComponent`. This means it directly includes the header, footer, and a router outlet to display routed page components.
* **Template:** `app.component.html`
* **Styles:** `app.component.scss`

### `app.config.ts`
This file defines the application-level providers and configurations.
Key configurations:
* `provideZoneChangeDetection({ eventCoalescing: true })`: Configures Zone.js for change detection.
* `provideRouter(routes, ...features)`: Sets up the Angular router with routes defined in `app.routes.ts`.
    * `withComponentInputBinding()`: Enables binding route parameters to component inputs.
    * `withHashLocation()`: Configures the router to use the hash-style routing strategy (`/#/path`).
    * `withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })`: Configures scroll behavior for navigation, enabling scroll position restoration and scrolling to anchor fragments.
* HttpClient and SSR providers are commented out, indicating they might not be in active use.

### `app.routes.ts`
Defines the application's routing structure. Each route object maps a URL path to a component and can include a title for the page.
* Redirects empty path `''` to `/home`.
* Routes include: `/home`, `/about`, `/products`, `/brands`, `/quality`, `/contact`, `/privacy-policy`, `/terms-conditions`.
* A wildcard route `**` maps to `NotFoundComponent` for handling 404 errors.

## 5. Layout Components

These components define the consistent structure around the page content.

### `src/app/layout/header/header.component.ts`
* **Purpose:** Displays the main site navigation bar and logo.
* **Standalone:** `true`
* **Functionality:**
    * Responsive mobile navigation toggle (`isMobileNavVisible`, `toggleMobileNav()`, `closeMobileNav()`).
    * Uses `RouterLink` and `RouterLinkActive` for navigation.
    * Integrates Font Awesome icons (`faBars`, `faTimes`).

### `src/app/layout/footer/footer.component.ts`
* **Purpose:** Displays the site footer with copyright information, contact details, and social media links.
* **Standalone:** `true`
* **Functionality:**
    * Displays the current year dynamically (`currentYear`).
    * Uses `RouterLink` for navigation links within the footer.
    * Integrates Font Awesome icons for contact info and social media (`faPhone`, `faEnvelope`, `faFacebookF`, etc.).

## 6. Page Components (`src/app/pages/`)

These are the main content views for each route. All page components are standalone.

### `home/home.component.ts`
* **Route:** `/home`
* **Purpose:** Displays the landing page content.
* **Data:** Contains structured data for hero section, unique selling propositions (USPs), featured brands, commitment statement, and a final call to action (CTA). Data is defined using interfaces (`HeroData`, `UspData`, etc.).
* **Sub-components:** HTML structure suggests potential for `UspItemComponent` and `HomeBrandCardComponent`, though they are commented out in the imports, indicating they might be integrated directly or planned for later.

### `about/about.component.ts`
* **Route:** `/about`
* **Purpose:** Provides information about Miryalguda Rice Industries.
* **Data:** Structured content for page header, introduction, legacy, community involvement, expertise, core values, and a CTA. Uses interfaces like `PageHeaderData`, `AboutSectionContent`, `ValueData`.

### `products/products.component.ts`
* **Route:** `/products`
* **Purpose:** Displays the range of rice products offered.
* **Data:** Fetches product data from `ProductService`.
* **Functionality:**
    * Groups products by category (`productGroups`).
    * Generates URL-friendly IDs for categories (`generateCategoryId`).
* **Uses Component:** `ProductCardComponent` to display each product.

### `brands/brands.component.ts`
* **Route:** `/brands`
* **Purpose:** Showcases the company's rice brands.
* **Data:** Fetches brand data from `BrandService`.
* **Uses Component:** `BrandProfileCardComponent` to display each brand.

### `quality/quality.component.ts`
* **Route:** `/quality`
* **Purpose:** Details the company's quality assurance processes.
* **Data:** Structured content for page header, introduction, multi-step quality process, and conclusion. Defines `ProcessStepData` interface for steps.
* **Uses Component:** `QualityProcessStepComponent` to display each step in the quality process.

### `contact/contact.component.ts`
* **Route:** `/contact`
* **Purpose:** Provides contact information and a contact form.
* **Data:** Contact details (address, phone, email, hours), social media links, and Google Maps iframe source. (Note: `mapIframeSrc` needs to be updated with a valid Google Maps embed URL).
* **Functionality:**
    * Reactive contact form (`contactForm`) built with `FormBuilder` and includes validation.
    * Prefills form fields based on URL query parameters (e.g., `?product=JSR%20Steam%20Rice`).
    * Handles form submission (`onSubmit`), with basic success/error feedback (currently console logs and resets).
* **Uses Pipe:** `SafeUrlPipe` for the map iframe source.

### `privacy-policy/privacy-policy.component.ts`
* **Route:** `/privacy-policy`
* **Purpose:** Displays the website's privacy policy. Content is largely static within its HTML template.

### `terms-conditions/terms-conditions.component.ts`
* **Route:** `/terms-conditions`
* **Purpose:** Displays the website's terms and conditions. Content is largely static within its HTML template.

### `not-found/not-found.component.ts`
* **Route:** `**` (Wildcard)
* **Purpose:** Displays a 404 "Page Not Found" message.

## 7. Reusable UI Components (`src/app/components/`)

These components are designed for reuse across multiple pages. All are standalone.

### `product-card/product-card.component.ts`
* **Selector:** `app-product-card`
* **Purpose:** Displays a single product's information in a card format.
* **Input:** `@Input() product!: Product;` - Receives a `Product` object to display.
* **Features:** Includes product image, name, brand tag, description, attributes, pack sizes, and an "Enquire Now" button linking to the contact page with the product name as a query parameter.

### `brand-profile-card/brand-profile-card.component.ts`
* **Selector:** `app-brand-profile-card`
* **Purpose:** Displays a profile for a single brand.
* **Input:** `@Input() brand!: Brand;` - Receives a `Brand` object.
* **Features:** Displays brand logo, name, tagline, description, main image, varieties, and an "Explore" link. Layout can be 'image-left' or 'image-right'.

### `quality-process-step/quality-process-step.component.ts`
* **Selector:** `app-quality-process-step`
* **Purpose:** Displays a single step in the quality assurance process.
* **Input:** `@Input() step!: ProcessStepData;` - Receives `ProcessStepData` containing step number, title, description, bullet points, and layout/visual information.

### Other Placeholder/Basic Components:
These components exist but might be basic placeholders or under development:
* `page-header-banner/page-header-banner.component.ts`
* `usp-item/usp-item.component.ts`
* `value-item/value-item.component.ts`
* `home-brand-card/home-brand-card.component.ts`

## 8. Services (`src/app/services/`)

Services are used to share data and logic across components. They are typically provided in 'root'.

### `product.service.ts`
* **Purpose:** Manages and provides product data.
* **Data:** Contains a private array of `Product` objects.
* **Interface:** `Product` (id, name, brandTag, brandTagClass, description, attributes, packSizes, imageUrl, altText, category, enquiryLinkPath, enquiryLinkQueryParam).
* **Methods:**
    * `getAllProducts(): Product[]`: Returns all products.
    * `getProductsByCategory(categoryName: string): Product[]`: Filters products by category.
    * `getCategories(): string[]`: Returns a list of unique product category names.

### `brand.service.ts`
* **Purpose:** Manages and provides brand data.
* **Data:** Contains a private array of `Brand` objects.
* **Interfaces:**
    * `BrandVariety` (name).
    * `Brand` (id, name, tagline, description, logoUrl, logoAltText, mainImageUrl, mainImageAltText, varieties, exploreLinkPath, exploreLinkFragment, profileBgClass, layoutType).
* **Methods:**
    * `getBrands(): Brand[]`: Returns all brands.
    * `getBrandById(id: string): Brand | undefined`: Returns a specific brand by its ID.

### `contact.service.ts`
* **Purpose:** Intended for contact form submission logic.
* **Current State:** Basic structure, constructor is empty. Actual form submission logic is currently handled within `ContactComponent` (simulated).

## 9. Pipes (`src/app/pipes/`)

### `safe-url.pipe.ts`
* **Name:** `safeUrl`
* **Standalone:** `true`
* **Purpose:** Sanitizes a URL to be safely used in resource contexts (e.g., iframe `src`).
* **Usage:** Uses Angular's `DomSanitizer` to bypass security and trust the given URL.

## 10. Data Models & Interfaces

The primary data structures are defined as interfaces directly within the service files (`ProductService`, `BrandService`) or within the page components that manage specific content sections (e.g., `HomeComponent`, `AboutComponent`, `QualityComponent`).

* **`Product`**: Defined in `product.service.ts`.
* **`Brand` & `BrandVariety`**: Defined in `brand.service.ts`.
* Page-specific interfaces (e.g., `HeroData`, `UspData` in `home.component.ts`, `AboutSectionContent` in `about.component.ts`) structure the content for those pages.
* Note: Files like `src/app/product.model.ts` and `src/app/brand.model.ts` exist but define empty classes. The interfaces in the services are currently used for data shaping.

## 11. Styling

* **SCSS:** The project uses SCSS for stylesheets. This is configured as the default style language in `angular.json` for component generation.
* **Global Styles:** `src/styles.scss` contains global styles and potentially imports for external libraries or resets.
* **Component Styles:** Each component has its own SCSS file for specific styles (e.g., `home.component.scss`).

## 12. Development & Build Scripts

Common scripts are defined in `package.json`:
* `npm start` (or `ng serve`): Starts the development server.
* `npm run build`: Builds the application for production. The build artifacts are stored in the `docs/` directory, ready for deployment to GitHub Pages. The build is configured to automatically copy `CNAME`, `robots.txt`, and `sitemap.xml` from `src/` to `docs/`.
* `npm test` (or `ng test`): Runs unit tests via Karma.
* `ng generate component <name>`: Scaffolds new components (and other Angular schematics).

## 13. VS Code Integration

The `.vscode/` directory contains configurations to enhance the development experience in Visual Studio Code:
* `extensions.json`: Recommends extensions such as Angular Essentials, Prettier, ESLint, etc., to aid development.
* `launch.json`: Provides debugging configurations:
    * `ng serve`: Launches the app in development mode and opens Chrome at `http://localhost:4200/`.
    * `ng test`: Runs Karma tests and opens Chrome for debugging at `http://localhost:9876/debug.html`.

---

This wiki page should provide a solid foundation for any new developer joining the Mririce-App project. Remember to keep it updated as the project evolves!
