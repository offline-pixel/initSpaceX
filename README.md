# SpaceXLaunch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `npm run dev:ssr` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `npm run build:ssr` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Lighthouse benchmark
### Heroku only
![Lighthouse test on heroku](https://github.com/offline-pixel/initSpaceX/blob/master/lighthouse/incognito-1.png)
The test performance is quite low as all of the code is initiated on main thread and also, this can be due to:
1. Node.js boilerplate is used. and,
2. Heroku may have issues in free plans.

They all blocks the thread for a second or two in total.

## Observations
1. Content-Length has to be set, otherwise, there's no way a request can be measured
2. Only api is hit once to reduce n/w requests
3. SCSS is used with mobile first approach and design is converted with a naked eye(means without using any tools)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
