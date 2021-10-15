const Bag = require ("./bag")
const Person = require ("./person")

// Class for passenger 
class Passenger extends Person {
    constructor(name, passportNumber, seatNumber) {
        super(name)
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

const bob = new Passenger('Bob', "Passport1", "1A")
const bobsCabinBag = new Bag(9)
const bobsHullBag = new Bag(23)
bob.addBag(bobsCabinBag)
bob.addBag(bobsHullBag)
console.log(bob) // [ Bag { weight: 9 }, Bag { weight: 23 } ]

module.exports = Passenger;