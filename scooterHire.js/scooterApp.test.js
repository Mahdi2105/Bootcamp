const User = require ("./user")
const Scooter = require ("./scooter")
const ScooterHire = require ("./scooterApp")

// User Tests
describe("User Tests", () => {
    test("Check user's name is a string", () => {
        expect(typeof User.users[1].name).toBe("string")
    })
    test("Check user's age is a number", () => {
        expect(typeof User.users[1].age).toBe("number")
    })
});

// Scooter Tests
describe("Scooter Tests", () => {
    test("Check scooter station", () => {
        expect(Scooter.scooters[1].station).toBe("Canary Wharf")
    })
    test("Check scooter availability", () => {
        expect(Scooter.scooters[1].available).toBe(false)
    })
});