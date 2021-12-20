### Hudl Sample Framework with Testcafe ###

This is a sample automation framework of hudl login functionality using Testcafe.

## Prerequisites ##

To run this project node and npm will need to be installed locally.

## Installation ##

After cloning the project, navigate to the project directory path in a command terminal and run the following command "npm i" to install all the project dependencies.

## Test Data ##

In order to succesfully run all the tests, valid login credentials for a coach will need to be added to the loginData.js file (directory: hudl-demo-testcafe/test/data/loginData.js). This file contains a JSON object where test data can be added which will be used to input user details for valid login. Simply fill in the "coachLogin" object with a valid email, password and the associated display name (ie. Coach B)for the account. Be sure they are all entered as strings.

## Test Execution ##
An execution script has already been provided in the package.json file called "test". From your command terminal (in the project directory), simply run "npm test" to execute each test. The results will be displayed in the terminal window.


