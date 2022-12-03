import {BasePage} from './group4BasePage'
import {By} from 'selenium-webdriver'

export class Hollie extends BasePage {
    bookBtn: By = By.xpath('//button[@class = "btn btn-outline-primary float-right openBooking"]')
    backBtn: By = By.xpath('//button[text()= "Back"]')
    nextBtn: By = By.xpath('//button[text()= "Next"]')
    todayBtn: By = By.xpath('//button[text()= "Today"]')
    dateBanner: By = By.xpath('//span[@class= "rbc-toolbar-label"]')

    constructor() {
        super({url: "https://automationintesting.online/"})
    }

    async repeatClick(num,clicker){
        for (let i = 0; i < num; i++) {
            await this.click(clicker)
        }
    }
}