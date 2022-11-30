import {By, WebElement, until} from 'selenium-webdriver' // Import added for selectDayNextMonth method
import {BasePage} from './group4BasePage'

export class StephCal extends BasePage {
    byBookThisRoomCta: By = By.xpath('//button[text()= "Book this room"]') // verified path - ('//button[text()= "Book this room"]') 
    byBookFirstName: By = By.name('firstname') // verified path - $$('[name= "firstname"]')
    byBookLastName: By = By.name('lastname') // verified path - $$('[name= "lastname"]')
    byBookEmail: By = By.name('email') // verified path - $$('[name= "email"]')
    byBookPhone: By = By.name('phone') // verified path - $$('[name= "phone"]')
    byBookCta: By = By.xpath('//button[text()= "Book"]') // verified path - $x('//button[text()= "Book"]')
    byHilightedDates: By = By.className("rbc-event-content") // verified path - $$('[class= "rbc-event-content"]')
    byNextMonthBtn: By = By.xpath('//button[text()= "Next"]') // verified path - $x('//button[text()= "Next"]')
    byCalendarView: By = By.className("rbc-month-view") // verified path - $$('[class= "rbc-month-view"]')
    byCalendarRows: By = By.className("rbc-month-row") // verified path - $$('[class= "rbc-month-row"]')[0] 
    byCalendarDayCells: By = By.className("rbc-day-bg") // verified path - $$('[class= "rbc-day-bg"]')[0] 


    constructor(){
        super({url:"https://automationintesting.online/"})
    }

    async clickToAcessBookingCal() {
        return await this.click(this.byBookThisRoomCta)
    }

    async selectDayNextMonth() {
        console.log("selectDayNextMonth function started")
        await this.click(this.byNextMonthBtn)
        console.log("Clicked the Next month CTA")
        let randomDayOfRandomWeek = (days: any[]) =>
            days[Math.floor(Math.random()*days.length)]
        console.log("Variable randomDayOfRandomWeek was created")
        let arrayOfDayCells = await this.getElements(this.byCalendarDayCells)
        console.log("Variable arrayOfDayCells was created")
        let randomDay:WebElement = randomDayOfRandomWeek(arrayOfDayCells)
        console.log("Variable randomDay was created")
        await randomDay.click()
        console.log(`Random day selected is array item ${randomDay}`)
    } // getElements is necesary for "selectDayNextMonth" method
    async getElements(elementBy: By): Promise<WebElement[]> {
        await this.driver.wait(until.elementsLocated(elementBy));
        let elements = await this.driver.findElements(elementBy);
        return elements;
    }


}