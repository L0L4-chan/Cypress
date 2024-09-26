
// cypress/integration/step_definitions/googleSteps.js

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('I am on ParaBank home page', () => {
  cy.visit('https://parabank.parasoft.com/parabank/index.htm'); // para ir a la pagina 
});


When('click on "About us"', () => {
  cy.get('.aboutus').click(); // para interactuar con el boton
});


Then('The system displays "About us" page', () => {
  cy.get('.title').should('contain', 'ParaSoft Demo Website')  // comprobación de resultados, revisar
});
