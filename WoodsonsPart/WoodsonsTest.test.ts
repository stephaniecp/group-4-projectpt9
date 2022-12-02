import { until } from "selenium-webdriver";
import { restfulBooker } from "./WoodsonsPageObject";


const booker = new restfulBooker();

describe ("Test for Restful Booker apllication.", () => {
    beforeEach(async () => {
        await booker.navigate();
    });
    afterAll(async () => {
        await booker.driver.quit();
    });
    test("Booking input fields valid entry", async () => {
        await booker.click(booker.bookRmBtn);
        await booker.setInput(booker.firstNameIpt, "Chad");
        await booker.setInput(booker.lastNameIpt, "Bumstead");
        await booker.setInput(booker.emailIpt, "bumChad@email.com");
        await booker.setInput(booker.phoneIpt, "1-890-084-8437");
        await booker.click(booker.bookBtn);
        await booker.click(booker.cancelBtn);
    });
    test("Booking input fields invalid entry, and checking for error messages.", async () => {
        await booker.click(booker.bookRmBtn);
        await booker.setInput(booker.firstNameIpt, "hi");
        await booker.setInput(booker.lastNameIpt, "my");
        await booker.setInput(booker.emailIpt, "bumCHad.email.com");
        await booker.setInput(booker.phoneIpt, "1234567890");
        await booker.click(booker.bookBtn);
        await booker.driver.wait(until.elementsLocated(booker.alertBoxDiv));
        let error = await booker.driver.findElement(booker.alertBoxDiv).getText();
        expect(error).toContain("must not be null");
    });
    test("Booker contact information.", async () => {
        await booker.setInput(booker.contactName, "Chad Bumstead");
        await booker.setInput(booker.contactEmail, "bumChad.email.com");
        await booker.setInput(booker.contactPhone, "1-890-084-8437");
        await booker.setInput(booker.contactSubject, "honey moon");
        await booker.setInput(booker.contactMessage, "Me and my wife are looking to book this room for our honeymoon.");
        await booker.click(booker.submitContact);
    });

});
