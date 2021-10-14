// CLass for bags
class Bag {
    
    constructor(weight) {
        this.weight = weight
    }
}

const bag = new Bag(16)
console.log(bag.weight) 

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

const bob = new Passenger('Bob the Builder', "Passport123", "1A")
const bobsCabinBag = new Bag(9)
const bobsHullBag = new Bag(23)
bob.addBag(bobsCabinBag)
bob.addBag(bobsHullBag)
console.log(bob.bags) // [ Bag { weight: 9 }, Bag { weight: 23 } ]

module.exports = {Passenger, Bag};