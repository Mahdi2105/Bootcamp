const Bag = require ("./bag")
const Passenger = require ("./passenger")
const Plane = require ("./plane")
const Airport = require ("./airport");
const CrewMember = require("./crewMember");

// Bag Tests
const overBag = new Bag(43);
describe("Bag Tests", () => {
    test("Check weight works", () => {
        expect( new Bag(12).weight).toBe(12)
    })
    test("Throw an error for no weight", () => {
        expect(() => new Bag()).toThrowError('Bag must have a weight')
    })
    test('should return true or false', () => {
        expect(overBag.isOverLimit()).toBe(true);
      })
    /*test("Throw an error for over limit", () => {
        expect(() => new Bag(45)).toThrowError("Bag is over limit")
    })*/
});

// Passenger Tests
describe("Passenger Tests", () => {
    beforeAll(() => {
        pass1 = new Passenger('Harry', "Passport2", "2A");
        const pass1Bag = new Bag(12);
        pass1.addBag(pass1Bag);
        pass2 = new Passenger('Aaron', "Passport3", "3A");
    });
    test("Check bag weight", () => {
        expect(pass1.bags).toEqual([{"weight": 12}])
    });
    test("Check name", () => {
        expect(pass1.name).toEqual("Harry")
    });
});

// Airport Tests
describe("Airport Tests", () => {
    test("Check plane type", () => {
        expect(Airport.airports[1].name).toEqual("Gatwick")
    })
});

// Plane Tests - This comes after airport because i need the airport
// variables to run the tests in here
describe("Plane Tests", () => {
    beforeAll(() => {
        plane2 = new Plane("Jet");
        plane2.board(pass1.name)
        plane2.board(pass2.name)
        plane2.takeOff(Airport.airports[0])
        plane2.land1(Airport.airports[1])
    });
    test("Check plane type", () => {
        expect(plane2.type).toEqual("Jet")
    })
    test("Check plane passenger type", () => {
        expect(typeof plane2.passengers).toBe('object')
    })
    test("Check land type", () => {
        expect(typeof plane2.lands).toBe('object')
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
