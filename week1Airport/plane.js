class Plane {
    constructor(type, colour) {
        this.type = type;
        this.colour = colour;
    }
}

const plane1 = new Plane("Airbus", "White")

module.exports = Plane;