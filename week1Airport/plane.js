class Plane {
    constructor(type, colour) {
        this.type = type;
        this.colour = colour;
        this.passengers = [];
    }
    board(passenger) {
        this.passengers.push(passenger)
    }
}

const plane1 = new Plane("Airbus", "White")

module.exports = Plane;