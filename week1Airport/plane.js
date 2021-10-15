class Plane {
    constructor(type) {
        this.type = type;
        this.passengers = []
        this.lands = []
        this.takesOff = []
    }

    board(passenger) {
        this.passengers.push(passenger)
    }
    takeOff(airport) {
        this.takesOff.push(airport)
    }
    land(airport) {
        this.lands.push(airport)
    }
}

const plane1 = new Plane("Airbus")
plane1.board("bob")
plane1.board("Harry")

console.log(plane1.passengers);

module.exports = Plane;