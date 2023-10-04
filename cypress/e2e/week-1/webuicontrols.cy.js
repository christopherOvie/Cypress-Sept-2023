/// <reference types="cypress" />

const data = require('../../testdata/userdata.json')


describe('webui controls',()=>{
    beforeEach(()=>{
        //open  a  website
        cy.visit('/')
            })
 
it('test form submission',()=>{
  //input data
  cy.get("input[type='file']").selectFile('cypress/testdata/image1.jpg')
  cy.get('input[name="g2599-name"]').clear().type(data.name).should('have.value',data.name);
  cy.get("input[type='email']").clear().type(data.email);
  //dropdown
  cy.get('#g2599-experienceinyears')
  .select(data.exp)
  .should('have.value',data.exp);
  
  cy.get("input[type='url']").type(data.website);


  //checkboxes and radio buttons
cy.get("input[value='Functional Testing']")
  .should('not.be.checked')
  .check();

  cy.get('input.checkbox-multiple').check({multiple:true})

  cy.get("input[value='Post Graduate']")
  .should('not.be.checked')
  .check();
  //alert box

  cy.get("button[onclick='myFunction()']")
  .click()
  .then(()=>{
    cy.on("window:alert", (alert)=>{
expect (alert).to.equal("Do you really fill rest of the form?");
cy.on("window.confirm", () =>true);

    })
       })
    
       cy.get('#contact-form-comment-g2599-comment').clear().type(data.comments)
       
//ist assertion       button[type='submit']
       cy.get("button[class='pushbutton-wide']")
       .click().then(()=>{
        cy.contains(data.message).should("be.visible")

        //2nd assertion
        cy.get('#contact-form-2599 > h3').then(($el)=>{
      const actualMessage = $el.text().trim();
      expect(actualMessage).to.equal(data.message)

//       // You can also use a more specific selector to locate the address element if necessary.
cy.get('p').should('contain', 'Name: james', 'oviechristopher6@gmail.com', 'Website: https://www.globalsqa.com/samplepagetest/');

        })
       })       
  })
  
  })
  



