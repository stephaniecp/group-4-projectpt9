import {Marika} from './MarikaPageObject'
const marika = new Marika ()
describe('open url', () => {
    //jest.setTimeout(5000) // Not necessary timeout

    beforeAll(async () =>{
        await super({url: "https://automationintesting.online/"})
    })

})

