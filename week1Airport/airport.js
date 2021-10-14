class Airport {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
}

const airport1 = new Airport("Heathrow", "UK")

module.exports = Airport;