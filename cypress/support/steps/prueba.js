
// cypress/integration/step_definitions/googleSteps.js

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('I am on ParaBank home page', () => {
  cy.visit('https://parabank.parasoft.com/parabank/index.htm'); // para ir a la pagina  
});

When('I introduce wrong user name', () => {
  cy.get('input[name=username]').type('msnh');
});

And('password', () => {
  cy.get('.input[name=password]').type('msnh');
});

And('click on "LOG IN"', () => {
  cy.get('.button[value="Log In"]').click();
});

Then('The system displays error message', () => {
  cy.get('.title').should('contain', 'Error!');
});

Given('I am on ParaBank home page', () => {
  cy.visit('https://parabank.parasoft.com/parabank/index.htm');  
});


When('I click on "Forgot login info"', () => {
  cy.get('a[href^="lookup.htm"]').click();//busca que el texto comience por y lo indico con ^
});


Then('The system displays a form to fill', () => {
  cy.get('.title').should('contain', 'Customer Lookup'); 
});


Given('I am on the "Customer lookup" page', () => {
  cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
});


When('I click on "Find my Login info"', () => {
  cy.get('.button[value^="Find"]').click(); 
});


Then('Required info warning is shown', () => {
  cy.get('.error').contains('First name is required');
  cy.get('.error').contains('Last name is required');
  cy.get('.error').contains('Address is required');
  cy.get('.error').contains('City is required');
  cy.get('.error').contains('State is required');
  cy.get('.error').contains('Zip Code is required');
  cy.get('.error').contains('Social Security Number is required'); 
});


Given('I am on ParaBank home page', () => {
  cy.visit('https://parabank.parasoft.com/parabank/index.htm'); // para ir a la pagina 
});


When('click on "About us"', () => {
  cy.get('.aboutus').click(); // para interactuar con el boton
});


Then('The system displays "About us" page', () => {
  cy.get('.title').should('contain', 'ParaSoft Demo Website')  // comprobación de resultados, revisar
});
