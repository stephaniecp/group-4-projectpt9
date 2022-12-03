import { Builder,By,Capabilities, WebDriver, until, WebElement} from "selenium-webdriver";

export class RestPage {
    driver: WebDriver;

    url: string = "https://automationintesting.online";

    name: By = By.id('name')
    email: By = By.id('email')
    phoneNum: By = By.id('phone')
    subject: By = By.id('subject')
    msg: By = By.id('description')
    submit: By = By.id('submitContact')
    error: By = By.className('alert alert-danger')
    confirm: By = By.xpath ('//h2[text()= "Thanks for getting in touch John Smith!"]')
    map:By = By.className('pigeon-overlays')


    constructor(driver: WebDriver) {
        this.driver = driver;
    }
    async navigate(url?: string): Promise<void> {
        if (url) return await this.driver.get(url);
        else if (this.url) return await this.driver.get(this.url)
        else
        return Promise.reject(
            "BasePage.navigate() needs a url defined on the page objects, or one passed in."
        )
    }

    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getElement(elementBy: By): Promise< WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element))
        return element;
    }
    async click(elementBy: By): Promise<void> {
        return(await this.getElement(elementBy)).click();
    }
    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys)
    }
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }
    async getAttribute(elementBy: By, attribute: string): Promise<string> {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }




}
