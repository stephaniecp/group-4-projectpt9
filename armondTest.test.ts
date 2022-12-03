import { RestPage } from "./armondPageObject";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new RestPage(driver);

test('contact us', async () => {
    await page.navigate();
    await page.getElement(page.name);
    await page.setInput(page.name, "John Smith ");
    await page.getElement(page.email);
    await page.setInput(page.email, "John@fakeemail.com");
    await page.getElement(page.phoneNum);
    await page.setInput(page.phoneNum, "12345678900");
    await page.getElement(page.subject);
    await page.setInput(page.subject,"Towels");
    await page.getElement(page.msg);
    await page.setInput(page.msg,"Will towels be provided or will I need to bring my own?");
    await page.getElement(page.submit);
    await page.click(page.submit);
 //  await page.getElement(page.confirm);
 // await page.getText(page.confirm)
//let results = await driver.findElement(page.confirm).getText()
  //expect(results).toContain <string> ('Thanks for getting in touch John Smith!');
//expect(page.confirm).toContain('Thanks for getting in touch John Smith!')





}
)
beforeEach(async ()=>{
  await page.navigate()
})
afterAll(async ()=>{
  await driver.quit()
})
