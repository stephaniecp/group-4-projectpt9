import {BasePage} from './group4BasePage'
import {By} from 'selenium-webdriver'

export class Marika extends BasePage {
    bookThisRoom: By = By.xpath('//button[text()="Book this room"]')
    hackBtn: By = By.xpath('//button[text()= "Let me hack!"]')
    bookBtn: By = By.xpath('//button[text()= "Book"]')
    cancelBtn: By = By.xpath('//button[text()= "Cancel"]')
    constructor(){
        super({url: "https://automationintesting.online/"})
    }
        async clickToAccessBookingCal() {
            return await this.click(this.bookThisRoom)
        }
}
