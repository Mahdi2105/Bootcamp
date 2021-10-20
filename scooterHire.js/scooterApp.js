const User = require ("./user")
const Scooter = require ("./scooter")

user1 = new User ("James", 20, 150.00)
user2 = new User ("Mohammed", 21, 130.00)
user3 = new User ("Emily", 19, 140.00)
user4 = new User ("Philip", 22, 140.00)
user5 = new User ("Hannah", 21, 150.00)

scooter1 = new Scooter ("Scooter01", "Canary Wharf", "Fixed", 100)
scooter2 = new Scooter ("Scooter02", "Canary Wharf", "Fixed", 70)
scooter3 = new Scooter ("Scooter03", "Mile End", "Broken", 100)
scooter4 = new Scooter ("Scooter04", "Mile End", "Fixed", 100)
scooter5 = new Scooter ("Scooter05", "Whitechapel", "Broken", 40)

class ScooterHire {
    constructor(scooterID, hiredBy) {
        this.scooterID = []
        this.hiredBy = []
    }
    
    hireScooter(scooter, user) {
        if (scooter.available == true) {
        scooter.available = false
        user.balance -= 5
        this.scooterID.push(scooter.scooterID)
        this.hiredBy.push(user.name)
        scooter.station = "In use"
        } 
        else if (scooter.condition = "broken") {
            this.fix(scooter)
        }
        else if (scooter.charge < 100) {
            this.charge(scooter)
        }
    }

    

    charge(scooter) {
        scooter.battery = 100
        if (scooter.battery = 100) {
            scooter.available = true
            console.log("Battery fully charged and available to hire")

        }
    }
    fix(scooter) {
        scooter.condition = "Fixed"
        console.log("Scooter has been fixed")
        this.charge(scooter)
    }
    
    reportBroken(scooter) {
        scooter.condition = "Broken"
        console.log("Thank you for reporting")
        this.return(scooter, scooter.station)
    }

    return(scooter, station) {
        scooter.station = station
        if (scooter.condition = "Fixed") {
            this.charge(scooter)
        } else if (scooter.condition = "Broken") {
            this.fix(scooter)
        }
    }
};

hire1 = new ScooterHire()
hire1.hireScooter(scooter1, user1)
console.log(hire1)
hire1.return(scooter1, "Mile End")
hire1.reportBroken(scooter1)
console.log(scooter1)
console.log(user1)

module.exports = ScooterHire;