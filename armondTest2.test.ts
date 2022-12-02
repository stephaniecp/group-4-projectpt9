import { RestPage } from "./armondPageObject";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new RestPage(driver);


test('Map Navigation', async () => {
    await page.navigate()
    await page.getElement(page.map)
    await page.click(page.map)

    await driver.quit()


}
