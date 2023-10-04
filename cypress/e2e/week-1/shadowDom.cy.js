
describe('shadow DOM elements', () => {
    it('shadow dom handling', () => {
        cy.visit("https://selectorshub.com/xpath-practice-page/")

        cy.get("#userName")
        .shadow()
        .find("#app2")
        .shadow()
        .find("#pizza")
        .type("testing shadow dom")
    });

    it('shadow dom handling using global configuration', () => {
        cy.visit("https://selectorshub.com/xpath-practice-page/")

        cy.get("#pizza").type("testing shadow dom")
        .should('have.value','testing shadow dom')
    });

    it.only('shadow dom handling using second  global configuration', () => {
        cy.visit("https://books-pwakit.appspot.com/explore")

        cy.get("#input").type("science")
        .should('have.value','science')
        .click()
        .url('include','explore?q=science')
    });
});