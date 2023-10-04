describe('bbb', () => {
    it('bbb', () => {
      let date = new Date();
      date.setDate(date.getDate()) ;
      cy.log(date.getDate)

      let date1 = new Date() ;
      date1.setDate(date.getDate()+5) 
      cy.log(date1)


    });
});