# Angular19Prod

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.






ASSESSMENT OVERVIEW
Project is built using the latest Angular standalone structure instead of old NgModules.

Routes are protected so users must login before accessing cart or checkout pages.

All API calls automatically attach token using HTTP interceptor.

Cart data is handled using Angular Signals instead of services.

Cart subtotal is calculated automatically whenever cart changes.

Cart is saved to localStorage automatically so it stays after refresh.

UI is fully responsive using Tailwind CSS and works on mobile, tablet and desktop.

Products can be filtered by category easily.

Loader and error messages are shown properly when API is slow or fails.

Header shows live cart count badge.

Logout button clears data and redirects user to login page.

Cart and login state remain even after page refresh.

Folder structure is clean and easy to understand.