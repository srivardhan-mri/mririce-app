# MririceApp

This project is the official web application for Miryalaguda Rice Industries. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Project Overview

**Miryalaguda Rice Industries - Quality Rice, Trusted Supply**

This application serves as the main informational and contact hub for Miryalaguda Rice Industries. It showcases our products, company history, quality assurance processes, and provides contact information for inquiries.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development Server](#development-server)
- [Code Scaffolding](#code-scaffolding)
- [Building](#building)
- [Running Unit Tests](#running-unit-tests)
- [Running End-to-End Tests](#running-end-to-end-tests)
- [Project Structure](#project-structure)
- [Key Dependencies](#key-dependencies)
- [Further Help](#further-help)
- [License](#license)

## Tech Stack

* **Angular:** ^19.2.0
* **RxJS:** ~7.8.0
* **Zone.js:** ~0.15.0
* **Font Awesome:** Angular FontAwesome for icons.
    * Core: ^6.7.2
    * Brands SVG Icons: ^6.7.2
    * Solid SVG Icons: ^6.7.2
* **TypeScript:** ~5.7.2

## Prerequisites

Before you begin, ensure you have the following installed:
* Node.js (which includes npm) - Check `engines` in `package.json` if specified, otherwise use a recent LTS version.
* Angular CLI: `npm install -g @angular/cli` (globally, or use `npx ng`)

## Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/mririce/mririce-app.git](https://github.com/mririce/mririce-app.git)
    cd mririce-app
    ```
2.  Install NPM packages:
    ```bash
    npm install
    ```

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

The VS Code launch configuration `ng serve` is also available, which starts the npm script `npm: start` and opens Chrome at `http://localhost:4200/`.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. By default, components will be generated with SCSS for styling.

## Building

Run `ng build` to build the project. The build artifacts will be stored in the `doc/` directory.
Make sure all the files are in the root directory of doc/

### Build Configurations:

* **Production (default):** `ng build` or `ng build --configuration production --output-path docs`
    * Output hashing: all
    * Budgets:
        * Initial: Max warning 500kB, Max error 1MB
        * Any Component Style: Max warning 4kB, Max error 8kB
* **Development:** `ng build --configuration development`
    * Optimization: false
    * Extract Licenses: false
    * Source Map: true

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
The VS Code launch configuration `ng test` is also available, which starts the npm script `npm: test` and opens Chrome for debugging at `http://localhost:9876/debug.html`.

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests. (Note: The project does not come with an e2e testing framework by default; one needs to be added).

## Project Structure

* `src/`: Main application code.
    * `app/`: Core application module and components.
        * `components/`: Shared UI components (e.g., `brand-profile-card`, `product-card`).
        * `layout/`: Layout components like header and footer.
        * `pages/`: Page-level components (e.g., `home`, `about`, `products`).
        * `pipes/`: Custom pipes (e.g., `safe-url.pipe.ts`).
        * `services/`: Application services (e.g., `product.service.ts`, `brand.service.ts`).
        * `app.component.ts`: Root application component.
        * `app.config.ts`: Application configuration, including routing.
        * `app.routes.ts`: Main application routes.
    * `assets/`: Static assets like images and fonts.
    * `styles.scss`: Global stylesheets.
    * `index.html`: Main HTML page.
    * `main.ts`: Main entry point of the application.
* `docs/`: Contains the deployed/built version of the application.
* `angular.json`: Angular CLI configuration file.
* `package.json`: NPM package manager file, lists dependencies and scripts.
* `tsconfig.json`: TypeScript compiler configuration.

## Key Dependencies

* **@angular/common, @angular/core, @angular/compiler, @angular/forms, @angular/platform-browser, @angular/platform-browser-dynamic, @angular/router**: Core Angular framework modules.
* **@fortawesome/angular-fontawesome, @fortawesome/fontawesome-svg-core, @fortawesome/free-brands-svg-icons, @fortawesome/free-solid-svg-icons**: For using Font Awesome icons.
* **rxjs**: Reactive Extensions for JavaScript.
* **tslib**: Runtime library for TypeScript.
* **zone.js**: Angular's change detection mechanism.

### Development Dependencies

* **@angular-devkit/build-angular, @angular/cli, @angular/compiler-cli**: Angular development tools.
* **Jasmine, Karma**: Testing frameworks.
* **TypeScript**: Superset of JavaScript.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## License

(You should add your project's license information here. If you haven't chosen one, common choices are MIT, Apache 2.0, etc.)
The `3rdpartylicenses.txt` file in the `docs` directory contains license information for the third-party libraries used in this project.

---
