const Bag = require ("./bag")
const Passenger = require ("./passenger")
const Plane = require ("./plane")

describe("Bag tests", () => {
    test("Check weight works", () => {
        expect( new Bag(12).weight).toBe(12)
    })
    test("Throw an error for no weight", () => {
        expect(() => new Bag()).toThrowError('Bag must have a weight')
    })
    test("Throw an error for over limit", () => {
        expect(() => new Bag(45)).toThrowError("Bag is over limit")
    })
});

let pass1 = null;

describe("Passenger tests", () => {
    beforeAll(() => {
        pass1 = new Passenger('Harry', "Passport2", "2A");
        const pass1Bag = new Bag(12);
        pass1.addBag(pass1Bag);
    });
    test("Check bag weight", () => {
        expect(pass1.bags).toEqual([{"weight": 12}])
    });
    test("Check name", () => {
        expect(pass1.name).toEqual("Harry")
    });
});

describe("Plane", () => {
    beforeAll(() => {
        plane2 = new Plane("Jet", "Black");
    });
    test("Check plane type", () => {
        expect(plane2.type).toEqual("Jet")
    })
});