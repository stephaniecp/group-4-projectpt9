import {Marika} from './MarikaPageObject'
const marika = new Marika ()

describe('Marikas tests', () => {
    test('opening url and clicking on book', async () => {
        await marika.navigate()
        await marika.click(marika.hackBtn)
        await marika.clickToAccessBookingCal()
        await marika.click(marika.bookBtn)
        await marika.click(marika.cancelBtn)
        await marika.driver.quit()
    } )
})
