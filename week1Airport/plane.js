const Passenger = require ("./passenger")

class Plane {
    constructor(type) {
        this.type = type;
        this.passengers = []
    }

    board(passenger) {
        this.passengers.push(passenger)
    }
}

const plane1 = new Plane("Airbus")
plane1.board("bob")
plane1.board("Harry")

console.log(plane1.passengers);

module.exports = Plane;