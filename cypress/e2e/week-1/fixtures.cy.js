/// <reference types="cypress" />
describe('webui controls',function(){
    beforeEach(function(){
        cy.visit('/')
       cy.fixture('userdata')
       .then(testData=>{
             this.testData=testData;
       //  })
            })          
             })
it('test form submission',function(){
   
    // cy.fixture("userdata").then((testData)=>{
    //     this.testData=testData;
    //  })
  //input testData
  cy.get("input[type='file']").selectFile('cypress/testData/image1.jpg')

  cy.get('input[name="g2599-name"]')
  .clear()
  .type(this.testData.name)
  //.should('have.value',this.testData.name);
  cy.get("input[type='email']").clear().type(this.testData.email);
  cy.get("input[type='url']").clear().type(this.testData.website);

  
  //dropdown
  cy.get('#g2599-experienceinyears')
  .select(this.testData.exp)
  .should('have.value',this.testData.exp);
  

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
    
       cy.get('#contact-form-comment-g2599-comment').clear().type(this.testData.comments)
       
//ist assertion       button[type='submit']
       cy.get("button[class='pushbutton-wide']")
       .click().then(()=>{
        cy.contains(this.testData.message).should("be.visible")

        //2nd assertion
        cy.get('#contact-form-2599 > h3').then(($el)=>{
      const actualMessage = $el.text().trim();
      expect(actualMessage).to.equal(this.testData.message)

      // You can also use a more specific selector to locate the address element if necessary.


        })
       })       
    })   
})