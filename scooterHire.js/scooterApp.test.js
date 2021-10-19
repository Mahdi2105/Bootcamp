const User = require ("./user")
const Staff = require ("./staff")
const Scooter = require ("./scooter")

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
    test("Check scooter locaion", () => {
        expect(Scooter.scooters[1].location).toBe("Canary Wharf")
    })
    test("Check scooter availability", () => {
        expect(Scooter.scooters[1].available).toBe(false)
    })
});