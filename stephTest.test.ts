// To run test, run command: npx jest stephTest

import {StephCal} from './stephPageObject'
const stephCal = new StephCal()

describe("Calendar view opens and user can select dates", () => {
    // jest.setTimeout(5500) // Not necessary timeout

    // Verified test (11/30)
    test("Rality check test: Can find and click the 'Book This Room' CTA", async () => {
        await stephCal.navigate()
        console.log("Found webpage")  
        await stephCal.clickToAcessBookingCal()
        console.log("Found/clicked CTA to enter booking flow")
        await stephCal.getElement(stephCal.byCalendarView)
        console.log("Found calendar")
    })
    // Verified test (11/30)
    test("Can pick a random day on the following month", async() => {
        console.log("Starting second test execution")
        await stephCal.selectDayNextMonth()
        console.log("Picked a random day from the test file") 
    })

    // Verified test (12/01)
    test("Can view at least six months in the future", async () => {
        console.log("starting: Can view at least six months in the future ") 
        expect(await stephCal.verifyNextMonthStringIsDifferent()).toBe(true)
        console.log("Finishing: Can view at least six months in the future") 
    })

    // NOT A TEST: To close the browser once tests are done executing
    afterAll(async () => {
        await stephCal.driver.quit()
        console.log("Browser quit")
    });
        
})