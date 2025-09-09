# MRI Rice App

This project is the official web application for Miryalguda Rice Industries, developed with Angular. It serves as the main informational and contact hub, showcasing products, company history, and quality assurance processes.

## ✨ Features

*   **Product Showcase:** Displays a comprehensive list of rice products with detailed descriptions, attributes, and packaging information.
*   **Brand Profiles:** Highlights the company's various rice brands with their unique stories and product lines.
*   **Company Information:** Provides insights into the company's history, values, and commitment to quality.
*   **Contact & Enquiries:** Includes a contact form for customer enquiries, pre-filled with product information for user convenience.
*   **SEO Optimized:** Features dynamic sitemap generation, enhanced meta tag management (title, canonical URL, Open Graph, Twitter cards), and comprehensive structured data implementation for improved search engine visibility and rich snippets. Performance is boosted through optimized font loading and refined Netlify configuration.
*   **Responsive Design:** Ensures a seamless user experience across desktops, tablets, and mobile devices.

## 🗄️ Data Management

Application data for products, brands, and blog posts is now managed through dedicated JSON files (`products.json`, `brands.json`, `blogs.json`) located in `src/app/services/data/`. This approach centralizes data, improves maintainability, and facilitates dynamic content generation, such as the sitemap.

## 🚀 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [Angular CLI](https://angular.dev/tools/cli)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mririce/mririce-app.git
    cd mririce-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```
    Navigate to `http://localhost:4200/` to see the application in action.

## 🛠️ Development

### Code Scaffolding

Generate new Angular components, services, or other schematics using the Angular CLI:

```bash
ng generate component <component-name>
```

### Running Unit Tests

Execute the unit tests via Karma:

```bash
npm test
```

## 📦 Build & Deployment

To build the project for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `docs/` directory. This project is configured for continuous deployment on Netlify. The build process automatically includes essential files like `robots.txt`, and `sitemap.xml`.

## built-with-angular
* **Angular:** ^19.2.0
* **RxJS:** ~7.8.0
* **Zone.js:** ~0.15.0
* **Font Awesome:** For icons
* **TypeScript:** ~5.7.2

## 📄 License

This project is proprietary to Miryalguda Rice Industries. For license information regarding third-party libraries, please see the `3rdpartylicenses.txt` file in the `docs` directory.

[![Netlify Status](https://api.netlify.com/api/v1/badges/7e24eaa8-856c-469b-b162-7521a35faca9/deploy-status)](https://app.netlify.com/projects/flourishing-licorice-09db53/deploys)
![Angular](https://img.shields.io/badge/Angular-v19.2.0-DD0031?logo=angular)
![RxJS](https://img.shields.io/badge/RxJS-v7.8.0-B7178C?logo=reactivex)
![Zone.js](https://img.shields.io/badge/Zone.js-v0.15.0-5A6978)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-Icons-528DD7?logo=fontawesome)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.7.2-3178C6?logo=typescript)