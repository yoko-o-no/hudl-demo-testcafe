# Hudl Sample Framework with Testcafe #
This is a sample automation framework of hudl login functionality using Testcafe.

## Prerequisites ##
To run this project node.js and npm will need to be installed locally.

## Installation ##
After cloning the project, navigate to the project directory path in a command terminal and run the command "npm install" to install all the project dependencies.

## Test Data ##
In order to succesfully run all the tests, valid login credentials for a coach will need to be added to the loginData.js file (directory: hudl-demo-testcafe/test/data/loginData.js). This file contains a JSON object where test data can be added which will be used to input user details for valid login. Simply fill in the "coachLogin" object with a valid email, password and the associated display name (ie. Coach B) for the account. Be sure they are all entered as strings.

## Test Execution ##
An execution script has already been provided in the package.json file called "test" which executes the entire test suite. The scripts can be found here: hudl-demo-testcafe/test/scripts/login.js. In order to execute the tests simply run "npm test" from the project directory in your command terminal. The results will be displayed in the terminal window.
