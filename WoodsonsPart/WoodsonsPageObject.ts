import {By, WebDriver, until, WebElement} from "selenium-webdriver"
import { BasePage } from "../group4BasePage"

export class restfulBooker extends BasePage {

    bookRmBtn: By = By.xpath('//button[@class="btn btn-outline-primary float-right openBooking"]');
    firstNameIpt: By = By.xpath('//input[@name= "firstname"]');
    lastNameIpt: By = By.xpath('//input[@name="lastname"]');
    emailIpt: By = By.xpath('//input[@name="email"]');
    phoneIpt: By = By.xpath('//input[@name="phone"]');
    bookBtn: By = By.xpath('//button[@class="btn btn-outline-primary float-right book-room"]');
    cancelBtn: By = By.xpath('//button[@class="btn btn-outline-danger float-right book-room"]');
    alertBoxDiv: By = By.xpath('//div[@class="alert alert-danger"]');
    contactName: By = By.xpath('//input[@id= "name"]');
    contactEmail: By = By.xpath('//input[@id= "email"]');
    contactPhone: By = By.xpath('//input[@id= "phone"]');
    contactSubject: By = By.xpath('//input[@id= "subject"]');
    contactMessage: By = By.xpath('//textarea[@id= "description"]');
    submitContact: By = By.xpath('//button[@id= "submitContact"]');

    constructor() {
        super({url: "https://automationintesting.online/"})
    }
    



}