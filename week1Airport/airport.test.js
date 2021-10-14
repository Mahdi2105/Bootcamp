const {Passenger, Bag} = require ("./airport")

throw new Error('bag must have a weight')

describe("Airport bags", () => {
    test.skip("Check weight works", () => {
        expect( new Bag(8).weight).toBe(8)
    })
});

describe("Airport bags", () => {
    test("Throw an error", () => {
        expect(() => new Bag()).toThrowError('bag must have a weight')
    })
});
