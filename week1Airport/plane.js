class Plane {
    static planes = []

    constructor(type) {
        this.type = type;
        this.passengers = []
        this.lands = []
        this.takesOff = []
        this.constructor.planes.push(this.type)
    }

    board(passenger) {
        this.passengers.push(passenger)
    }
    takeOff(airport) {
        this.takesOff.push(airport)
    }
    land1(airport) {
        this.lands.push(airport)
    }
    
}

const plane1 = new Plane("Airbus")
plane1.board("bob")
plane1.board("Harry")
const plane0 = new Plane("Aircraft")
plane1.board("Luke")
plane1.board("Hasan")

//console.log(plane1.passengers);
console.log(Plane.planes);

module.exports = Plane;