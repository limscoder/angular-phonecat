# AngularJS-ngReact example

This is an example app to spike out using [ngReact](https://github.com/davidchang/ngReact) to incorporate React components within an Angular app.

This demonstrates 2-way data binding Angular->React and React->Angular

## Getting the dependencies

    npm install

## Building the code (required for .jsx compilation)

    webpack

## Running the server

    npm start

## Seeing the action

    http://localhost:8000/app/index.html#/phones

Type in the input box on the left (Angular) and the text label below updated (React).
Click on the "Click ME!" button (React) and see the input value updated (Angular).

## How it works

 * React components defined in [components.react.js](https://github.com/limscoder/angular-phonecat/blob/master/app/js/components/components.react.js).
 * React component is wired up as an Angular directive in [app.js](https://github.com/limscoder/angular-phonecat/blob/master/app/js/app.js).
 * React component is included in html in [phone-list.html](https://github.com/limscoder/angular-phonecat/blob/master/app/partials/phone-list.html).
 * Data binding is configured in controller in [controllers.js](https://github.com/limscoder/angular-phonecat/blob/master/app/js/controllers.js).
