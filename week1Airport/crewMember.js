const Bag = require ("./bag")

// Class for passenger 
class CrewMember {
    constructor(name, position, staffNumber) {
        this.name = name
        this.position = position
        this.staffNumber = staffNumber
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

const crew1 = new CrewMember('James', "Piolt", "001")
const pilotBag= new Bag(10)
crew1.addBag(pilotBag)
console.log(crew1.bags)

module.exports = CrewMember;