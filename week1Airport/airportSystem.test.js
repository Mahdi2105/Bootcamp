const Bag = require ("./bag")
const Passenger = require ("./passenger")

describe("Bag tests", () => {
    test.skip("Check weight works", () => {
        expect( new Bag(8).weight).toBe(8)
    })
});

describe("Airport bags", () => {
    test("Throw an error", () => {
        expect(() => new Bag()).toThrowError('bag must have a weight')
    })
});

throw new Error('bag must have a weight')