const User = require ("./user")
const Staff = require ("./staff")
const Scooter = require ("./scooter")

user1 = new User ("James", 20, 150.00)
user2 = new User ("Mohammed", 21, 130.00)
user3 = new User ("Emily", 19, 140.00)
user4 = new User ("Philip", 22, 140.00)
user5 = new User ("Hannah", 21, 150.00)

staff1 = new Staff ("Harry", 20)
staff2 = new Staff ("Ahmed", 21)
staff3 = new Staff ("Michelle", 19)
staff4 = new Staff ("John", 22)
staff5 = new Staff ("Clark", 21)

scooter1 = new Scooter ("Scooter01", "Canary Wharf", "Fixed", 100)
scooter2 = new Scooter ("Scooter02", "Canary Wharf", "Fixed", 70)
scooter3 = new Scooter ("Scooter03", "Mile End", "Broken", 100)
scooter4 = new Scooter ("Scooter04", "Mile End", "Fixed", 100)
scooter5 = new Scooter ("Scooter05", "Whitechapel", "Broken", 40)

/*class ScooterApp {

    static rents = []

    constructor (userName, scooterName) {
        this.userName = userName
        this.scooterName = scooterName
        this.constructor.rents.push(this)
    }

}*/
function hire(user) {
    
}

scooter1.hire(user1)

console.log(scooter1)