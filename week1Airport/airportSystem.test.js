const Bag = require ("./bag")
const Passenger = require ("./passenger")

/*describe("Bag tests", () => {
    test("Check weight works", () => {
        expect( new Bag(8).weight).toBe(8)
    })
    test("Throw an error", () => {
        expect(() => new Bag()).toThrowError('Bag must have a weight')
    })
});*/

describe("Passenger tests", () => {
    beforeAll(() => {
        const pass1 = new Passenger('Harry', "Passport2", "2A")
        const pass1Bag = new Bag(12)
        pass1.addBag(pass1Bag)
    })
    test("Check weight works", () => {
        expect(pass1.bags.weight).toBe(12)
    })
});