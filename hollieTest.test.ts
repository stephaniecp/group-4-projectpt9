import {Hollie} from './holliePageObject'
const hollie = new Hollie()

describe('testing Hollie stuff', () => {
    test('can click back a bunch', async () => {
        await hollie.navigate()
        await hollie.click(hollie.hackBtn)
        await hollie.click(hollie.bookBtn)
        await hollie.repeatClick(10, hollie.backBtn)
        await hollie.click(hollie.todayBtn)
        let currentDate = await hollie.getText(hollie.dateBanner)
        expect(currentDate).toContain("December 2022")
    }) 
    test("can click the next button multiple times", async () => {
        await hollie.navigate()
        await hollie.click(hollie.bookBtn) 
        await hollie.repeatClick(10, hollie.nextBtn)
        await hollie.click(hollie.todayBtn) 
        let newdate = await hollie.getText(hollie.dateBanner) 
        expect(newdate).toContain("December 2022")
        await hollie.driver.quit()  
    })

})