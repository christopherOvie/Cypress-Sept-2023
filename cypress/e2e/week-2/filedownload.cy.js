
describe('file download feature', () => {
    it('verify excel file download', () => {
        cy.visit('https://www.smartsheet.com/test-case-templates-examples');
        cy.get("#p-id-476116 div > p:nth-child(3) > a:nth-child(1)")
        .scrollIntoView();
        cy.get("#p-id-476116 div > p:nth-child(3) > a:nth-child(1)")
        .then(($el) => {
           const url= $el.prop('href');
           cy.downloadFile(url,"cypress/downloads","excel.xlsx")
        })
    });
});