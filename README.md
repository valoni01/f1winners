## Weather 

This is a F1 championship application that returns a list of champions since 2005 and also display the user by season on demand.


## Project Architecture

I used the container-presenter pattern to design the weather application. I had different great options before chosing the above pattern. But I wanted to increase the scope of my test and also implement other interesting features.

## Components

I have three components, the `app component` which I used as our entry point,
the `race-list component` for displaying the list of the champions since 2005 and also the `winner component` which displays the winner for eache race in the selected year of interest. The app component is the parent component while the others are the children component

# performance

Because of the size of the app, there was no need to import or use some of the provided angular features and files. 
I implemented caching for the `winner component` to reduce http calls.(I didn't do this for the racelist list, because I would expect the request to be made just once in the lifecycle of the application based on the architecture)
I used the onPush strategy on the child component as well.
I removed reductant files, 
I used the container directive to reduce reductant elements 
I used `forkJoin` to ensure that the list component is rendered only when the requests are   completed

# Testing

I Implemented both unit testing and interaction testing. This can be found in the `spec` file for the app component.

# Error Handling

I created and interceptor that listen to errors.

# Styles (UI/UX)

In order to improve performance as well and to keep the app as simple as it could be, there was no external libraries used. The colors where carefully picked and I made the app as simple as possible with minimal design.


# Angular info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).





