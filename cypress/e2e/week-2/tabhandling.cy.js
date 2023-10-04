describe('tab handling', () => {
    it('remove the target attr', () => {
       cy.visit("https://phptravels.com/demo");
       cy.contains('Login')
       .first()
       .invoke('removeAttr','target')
       .click()
       .then(() => {
        cy.contains('Sign in to your account to continue.').should.be.true
       })
    });
});