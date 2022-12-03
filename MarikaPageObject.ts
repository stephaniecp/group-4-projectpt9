import {BasePage} from './group4BasePage'
import {By} from 'selenium-webdriver'

export class Marika extends BasePage{

    constructor(){
        super({url: "https://automationintesting.online/"})
    }
        async clickToAccessBookingCal() {
            return await this.click(this.byBookThisroomcta)
        }

}