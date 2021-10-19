const Bag = require ("./bag")
const Person = require ("./person")
const Passenger = require ("./passenger")

// Class for passenger 
class CrewMember extends Person {
    static crewMembers = []

    constructor(name, position, staffNumber) {
        super(name)
        this.position = position
        this.staffNumber = staffNumber
        this.bags = []
        this.constructor.crewMembers.push(this)
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

const crew1 = new CrewMember('James', "Piolt", "001")
const pilotBag= new Bag(10)
crew1.addBag(pilotBag)
console.log(CrewMember.crewMembers)

module.exports = CrewMember;