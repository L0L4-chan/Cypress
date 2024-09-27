
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on google.es', () => {
  cy.visit('https://www.google.es'); // Navegar a la página de Google
});

And('the pop up block my access', () => {
  cy.window().then((win) => {
    cy.stub(win, 'prompt').returns('gfg');
});
});

When('click on "Reject"', () => {
  cy.get('#W0wltc').click(); // Clic en el botón "Rechazar todo"
});

Then('The system displays the home page', () => {
  cy.url().should('include', 'google.es'); // Verificar que la URL contiene 'google.es'
  cy.get('.RNNXgb').should('be.visible'); // Verificar que la barra de búsqueda está visible
});
