const Bag = require ("./bag")

// Class for passenger 
class Passenger {
    constructor(name, passportNumber, seatNumber) {
        this.name = name
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
console.log(bob.bags) // [ Bag { weight: 9 }, Bag { weight: 23 } ]

module.exports = Passenger;