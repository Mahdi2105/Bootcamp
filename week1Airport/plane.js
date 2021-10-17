const Passenger = require ("./passenger")
const CrewMember = require("./crewMember")

// Class for Plane
class Plane {
    static planes = []

    constructor(type) {
        this.type = type
        this.passengers = []
        this.crewMem = []
        this.lands = []
        this.takesOff = []
        this.constructor.planes.push(this)
    }

    passBoard(passenger) {
        this.passengers.push(passenger)
    }
    crewBoard(crew) {
        this.crewMem.push(crew)
    }
    takeOff(airport) {
        this.takesOff.push(airport)
    }
    land1(airport) {
        this.lands.push(airport)
    }
    
}

const plane1 = new Plane("Airbus")
plane1.passBoard(Passenger.passengers[0].name)
plane1.crewBoard(CrewMember.crewMembers[0].name)
const plane0 = new Plane("Aircraft")
plane0.passBoard("Luke")
plane0.crewBoard("Hasan")

//console.log(plane1.passengers);
console.log(Plane.planes);

module.exports = Plane;