const Plane = require ("./plane")

class Airport {
    static airports = []
    
    constructor(name) {
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
    }
    
    fly(plane) {
        let airportMap = new Map (Airport.airports)
        airportMap.delete(plane)
        this.planes.push(plane)

    }
}

const airport1 = new Airport("Heathrow")
const airport2 = new Airport("Gatwick");
const airport3 = new Airport("Manchester")

airport2.fly(Plane.planes[0])

module.exports = Airport;

console.log(Airport.airports);
