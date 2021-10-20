const User = require ("../src/user")
const Scooter = require ("../src/scooter")
const ScooterHire = require ("../src/scooterHire")

// User Tests
describe("User Tests", () => {
    let user1 = new User ("James", 20, 150.00)
    test("Check user's name is a string", () => {
        expect(typeof User.users[0].name).toBe("string")
    })
    test("Check user's age is a number", () => {
        expect(typeof User.users[0].age).toBe("number")
    })
});

// Scooter Tests
describe("Scooter Tests", () => {
    scooter1 = new Scooter ("Scooter01", "Canary Wharf", "Fixed", 100)
    test("Check scooter station", () => {
        expect(Scooter.scooters[0].station).toBe("Canary Wharf")
    })
    test("Check scooter availability", () => {
        expect(Scooter.scooters[0].available).toBe(true)
    })
});