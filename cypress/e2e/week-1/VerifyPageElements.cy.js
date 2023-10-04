/// <reference types="cypress" />

const toolData = require('../../testdata/toolsuserdata.json')
import { faker } from '@faker-js/faker';



describe('Verify Page Elements', () => {
  beforeEach(()=>{
        //open  a  website
        cy.visit('https://demoqa.com/automation-practice-form')
            })
             it('https://demoqa.com/automation-practice-form', () => {
        cy.get('#firstName').clear().type(toolData.firstName).should('have.value',toolData.firstName);
        cy.get('#lastName').clear().type(toolData.lastName).should('have.value',toolData.lastName);
        cy.get('#userEmail').clear().type(toolData.email).should('have.value',toolData.email);    
    // Get all radio buttons into a Cypress array
    cy.get('div.custom-control.custom-radio').as('radioButtons');
 // Get the count of radio buttons
     cy.get('@radioButtons').should('have.length.gt', 2).then((radioButtons) => {
        // Generate a random index to select a radio button
        const randomIndex = Math.floor(Math.random() * radioButtons.length);
   // Select the radio button at the random index
        cy.get('@radioButtons').eq(randomIndex).click();
      });
 //get random phone numbr
const min = 10;
const max = 100000000;
const randomNumber = faker.datatype.number({ min, max });
cy.get('#userNumber').type(randomNumber);
// // Locate the datepicker input field (You may need to adjust the selector)

 // Get all checkboxes
cy.get("[type='checkbox']").then((checkboxes) => {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * checkboxes.length);

  // Get the checkbox at the random index
  const randomCheckbox = checkboxes[randomIndex];

  // Check the randomly selected checkbox
  cy.wrap(randomCheckbox).check({force: true});
  cy.get("#uploadPicture").selectFile('cypress/testdata/image1.jpg')

cy.get('#currentAddress').type(toolData.currentAddress)
cy.get("#state").type('NGR',{force: true})

 //cy.get('#close-fixedban > img').type('NGR')
// cy.get('#close-fixedban > img').type('NGR').tab().tab().tab();

// cy.get('#firstInputField').type('Text for first field').tab().type('Text for second field')
  
// cy.frame(selector)
//   .find(iframeElementSelector)
//   .doSomethingInsideIframe();
   



 
});     
    });
});