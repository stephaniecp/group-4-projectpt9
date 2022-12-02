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
    byMonthString: By =By.className("rbc-toolbar-label") // verified path - $$('[class= "rbc-toolbar-label"]') 

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
            days[Math.floor(Math.random()*days.length)] // Found how to do this at: https://www.wiserfirst.com/blog/typescript-random-array-element/
        console.log("Variable randomDayOfRandomWeek was created")
        let arrayOfDayCells = await this.getElements(this.byCalendarDayCells)
        console.log("Variable arrayOfDayCells was created")
        let randomDay:WebElement = randomDayOfRandomWeek(arrayOfDayCells)
        await randomDay.click()
        console.log(`Random day selected is array item ${randomDay}`)

    // Start of Click and hold
        // Action act = new Action(this.selectDayNextMonth)
    // End of Click and hold functionality

    } // getElements is necesary for "selectDayNextMonth" method
    async getElements(elementBy: By): Promise<WebElement[]> {
        await this.driver.wait(until.elementsLocated(elementBy));
        let elements = await this.driver.findElements(elementBy);
        return elements;
    }

    async viewSixMonthsFromCurrentMonth() {
        for (let i = 0; i <7; i++) {
            console.log(`For loop starting, i value: ${i}`)
            await this.click(this.byNextMonthBtn)
        }
        console.log(`For loop ended`)
        // Return statement not necessary since not returning any value
        return undefined
    }

    async verifyNextMonthStringIsDifferent(): Promise<boolean> {
        console.log("Starting to execute: verifyNextMonthStringIsDifferent")
        const currentMonthString = await this.getText(this.byMonthString)
        console.log(`Value of current month string is ${currentMonthString}`)
        await this.click(this.byNextMonthBtn)
        const nextMonthString = await this.getText(this.byMonthString)
        console.log(`Value of next month string is ${nextMonthString}`)
        return currentMonthString !== nextMonthString
    }

    // async selectTwoDaysRangeFromRandomDay() {
    //     console.log("")
    //     await this.click(this.selectDayNextMonth)
        
    // }

}