// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand')
require('cy-verify-downloads').addCustomCommand();


// Alternatively you can use CommonJS syntax:
//import pacakages and global hooks
// require('./commands')




export const setupHook = () =>{
before(function () {
    cy.log('global pre-hooks')
    
})
beforeEach(()=>{
    //open  a  website
    cy.log('global before each hooks')
        })

after(function () {
    cy.log('global post-hooks')
    
})

afterEach(()=>{
    cy.log('global after each hooks')
})
}
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


