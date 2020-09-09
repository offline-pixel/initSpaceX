# SpaceXLaunch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Lighthouse benchmark
### Heroku only
![Lighthouse test on heroku](https://github.com/offline-pixel/initSpaceX/blob/master/heroku-bc.png)
The test performance is quite low and this can be due to two reasons:
1. Node.js boilerplate is used. and,
2. Heroku may have issues in free plans.

## Observations
1. Content-Length has to be set, otherwise, there's no way to the request to be measured
2. Only api is hit once to reduce n/w requests
3. SCSS is used with mobile first approach
4. Refracting can be done at anytime depending upon what we really want to achieve on or above benchmarks.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
