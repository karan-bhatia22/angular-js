# TicTacToe

Find the live project at : https://tic-tac-toe-pwa.vercel.app/

Steps:

1. Built two components - square and board. The square component is a dumb component and the board component is a smart/active component.
2. The square component is replicated for 9 squares and the board component handles all the functions over the square component.
3. The square component accepts any of the two values 'X' or 'O' from its parent board component.
4. The state of the player is maintained using a boolean variable which is changed upon click event on the square.
5. The winner decision function runs after each move and when there is any winner the winner display component shows up.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
