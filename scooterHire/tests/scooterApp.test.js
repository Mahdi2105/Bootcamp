const User = require ("../src/user")
const Scooter = require ("../src/scooter")
const ScooterHire = require ("../src/scooterHire")

let user1 = new User ("James", 20, 150.00)
let scooter1 = new Scooter ("Scooter01", "Canary Wharf", "Fixed", 100)
let hire1 = new ScooterHire (scooter1, user1)

// User Tests
describe("User Tests", () => {
    
    test("Check user's name is a string", () => {
        expect(typeof User.users[0].name).toBe("string")
    })
    test("Check user's age is a number", () => {
        expect(typeof User.users[0].age).toBe("number")
    })
    test("Check user's balance is a number", () => {
        expect(typeof User.users[0].balance).toBe("number")
    })
});

// Scooter Tests
describe("Scooter Tests", () => {
    
    test("Check scooter station", () => {
        expect(Scooter.scooters[0].station).toBe("Canary Wharf")
    })
    test("Check scooter availability", () => {
        expect(Scooter.scooters[0].available).toBe(true)
    })
    test("Check scooter battery", () => {
        expect(Scooter.scooters[0].battery).toBe(100)
    })
});

//Async tests 
describe("Async Tests", () => {
    test("Charge", async () => {
        await hire1.charge(scooter1); // we need to wait for the charge!
        console.log("Charge test complete");
    })
    test("Fix", async () => {
        await hire1.fix(scooter1); // we need to wait for the charge!
        console.log("Fix test complete");
    })
});
