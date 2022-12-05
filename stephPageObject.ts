import {By, WebElement, until, Origin, Button, Actions} from 'selenium-webdriver' // Import added for selectDayNextMonth method
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
    } 
    
    async selectDayElementByDayNumber(day: number): Promise<WebElement> {
        const allMonthDaysArray = await this.getElements(this.byCalendarDayCells)
        console.log(`selectDayElementByDayNumber: Found ${allMonthDaysArray.length} days in allMonthDaysArray`)
        return allMonthDaysArray[day]
    }

// Should be exported to personal basePage - getElements is necesary for "selectDayNextMonth" method
    async getElements(elementBy: By): Promise<WebElement[]> {
        await this.driver.wait(until.elementsLocated(elementBy));
        let elements = await this.driver.findElements(elementBy);
        return elements;
    } 

// Should be exported to personal basePage - add mouse icon to view what it's doing while running tests
    /**
    * Some debug code inspired by:
    * https://stackoverflow.com/a/52669454
    */
    async showMouseMovement() {
            const jsCode = `
            function enableCursor() {
                var seleniumFollowerImg = document.createElement('img');
                seleniumFollowerImg.setAttribute('src', 'data:image/png;base64,'
                + 'iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAQAAACGG/bgAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAA'
                + 'HsYAAB7GAZEt8iwAAAAHdElNRQfgAwgMIwdxU/i7AAABZklEQVQ4y43TsU4UURSH8W+XmYwkS2I0'
                + '9CRKpKGhsvIJjG9giQmliHFZlkUIGnEF7KTiCagpsYHWhoTQaiUUxLixYZb5KAAZZhbunu7O/PKf'
                + 'e+fcA+/pqwb4DuximEqXhT4iI8dMpBWEsWsuGYdpZFttiLSSgTvhZ1W/SvfO1CvYdV1kPghV68a3'
                + '0zzUWZH5pBqEui7dnqlFmLoq0gxC1XfGZdoLal2kea8ahLoqKXNAJQBT2yJzwUTVt0bS6ANqy1ga'
                + 'VCEq/oVTtjji4hQVhhnlYBH4WIJV9vlkXLm+10R8oJb79Jl1j9UdazJRGpkrmNkSF9SOz2T71s7M'
                + 'SIfD2lmmfjGSRz3hK8l4w1P+bah/HJLN0sys2JSMZQB+jKo6KSc8vLlLn5ikzF4268Wg2+pPOWW6'
                + 'ONcpr3PrXy9VfS473M/D7H+TLmrqsXtOGctvxvMv2oVNP+Av0uHbzbxyJaywyUjx8TlnPY2YxqkD'
                + 'dAAAAABJRU5ErkJggg==');
                seleniumFollowerImg.setAttribute('id', 'selenium_mouse_follower');
                seleniumFollowerImg.setAttribute('style', 'position: absolute; z-index: 99999999999; pointer-events: none; left:0; top:0');
                document.body.appendChild(seleniumFollowerImg);
                document.onmousemove = function (e) {
                document.getElementById('selenium_mouse_follower').style.left = e.pageX + 'px';
                document.getElementById('selenium_mouse_follower').style.top = e.pageY + 'px';
                };
            };
            enableCursor();        
            `
            await this.driver.executeScript(jsCode);
        }

    async verifyNextMonthStringIsDifferent(): Promise<boolean> {
        console.log("Starting to execute: verifyNextMonthStringIsDifferent")
        const currentMonthString = await this.getText(this.byMonthString)
        console.log(`Value of current month string is ${currentMonthString}`)
        await this.click(this.byNextMonthBtn)
        await this.driver.sleep(1200)
        const nextMonthString = await this.getText(this.byMonthString)
        console.log(`Value of next month string is ${nextMonthString}`)
        return currentMonthString !== nextMonthString
    }

    actionWiggle(actions:Actions, originElement:WebElement, moveDurationMs:number=100):Actions {
        let result:Actions = actions.move({origin: originElement, duration: moveDurationMs}) 
        actions = actions.move({origin: originElement, x: 10, y: 0, duration: moveDurationMs}) 
        result = actions.move({origin: originElement, x: 0, y: -10, duration: moveDurationMs}) 
        result = actions.move({origin: originElement, x: -10, y: 0, duration: moveDurationMs}) 
        result = actions.move({origin: originElement, x: 0, y: 10, duration: moveDurationMs}) 
        result = actions.pause(moveDurationMs)
        return result;
    }

    actionPressWiggle(actions:Actions, originElement:WebElement, moveDurationMs:number=100):Actions {
        actions = this.actionWiggle(actions, originElement, moveDurationMs);
        actions.press(Button.LEFT)
        return this.actionWiggle(actions, originElement, moveDurationMs)
    }

    actionReleaseWiggle(actions:Actions, originElement:WebElement, moveDurationMs:number=100):Actions {
        actions = this.actionWiggle(actions, originElement, moveDurationMs);
        actions.release(Button.LEFT)
        return this.actionWiggle(actions, originElement, moveDurationMs)        
    }

    async doPressHoldMoveRelease(fromElement: WebElement, toElement: WebElement): Promise<void> {
        //required importing "Actions" 
        // return this.driver.actions().dragAndDrop(fromElement, toElement).perform()
        console.log(`doPressHoldMoveRelease phase=Start`)
        const moveDuration = 50
        await this.driver.actions().clear()
        let actions = this.driver.actions()

        actions = this.actionPressWiggle(actions, fromElement, moveDuration)
        actions = this.actionReleaseWiggle(actions, toElement, moveDuration)

        const actionPromise:Promise<void> = actions.perform();
        console.log(`doPressHoldMoveRelease phase=Done`)
        return await actionPromise
    }
}