const Bag = require ("./bag")
const Passenger = require ("./passenger")
const Plane = require ("./plane")
const Airport = require ("./airport");
const CrewMember = require("./crewMember");

// Bag Tests
describe("Bag Tests", () => {
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

// Passenger Tests
describe("Passenger Tests", () => {
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

// Plane Tests
describe("Plane Tests", () => {
    beforeAll(() => {
        plane2 = new Plane("Jet", "Black");
    });
    test("Check plane type", () => {
        expect(plane2.type).toEqual("Jet")
    })
});

// Airport Tests
describe("Airport Tests", () => {
    beforeAll(() => {
        airport2 = new Airport("Gatwick", "UK");
    });
    test("Check plane type", () => {
        expect(airport2.name).toEqual("Gatwick")
    })
});

// Crew Member Tests
describe("Crew Member Tests", () => {
    beforeAll(() => {
        crew2 = new CrewMember("Allison", "Attendant", "002");
        const crew2Bag = new Bag(14);
        crew2.addBag(crew2Bag);
    });
    test("Check crew member staff number", () => {
        expect(crew2.staffNumber).toEqual("002")
    })
    test("Check crew member staff number", () => {
        expect(crew2.bags).toEqual([{"weight": 14}])
    })
});