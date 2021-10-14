class Plane {
    constructor(type, colour) {
        this.type = type;
        this.colour = colour;
        this.passengers = [];
    }
}

const plane1 = new Plane("Airbus", "White")

module.exports = Plane;

console.log(Plane.passengers);