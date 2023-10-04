import { getTodayDate,getFutureDate } from "../../util/helper";
describe('handling date picker', () => {
    it('test current date', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

             cy.frameLoaded()

        cy.iframe("frame-one796456169")
        .find(".icon_calendar")
        .click()
        .then(()=>{
            cy.iframe("frame-one796456169")
            .find('[data-handler="selectDay"]')
            .contains(getTodayDate)
            .click();
        })
    });
});