/// <reference types="cypress" />
//opening a webpage

describe("test suite", () => {
  beforeEach("", () => {
    cy.visit("https://docs.cypress.io/api/table-of-contents");
  });
  it("test case 001", () => {
    //url commands
    cy.url().should("include", "api/table-of-contents");
    cy.url().should("equal", "https://docs.cypress.io/api/table-of-contents");
    //cy.viewport(10000,8000)
    cy.viewport("iphone-6+");

    //query commands
  });
});
//cy.visit('')
