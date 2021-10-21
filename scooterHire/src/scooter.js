const User = require ("./user")

// Class for Scooter 
class Scooter{
    static scooters = []

    constructor(scooterID, station, condition, battery,range, available) {
        this.scooterID = scooterID
        this.station = station
        this.condition = condition
        this.battery = battery
        this.range = this.battery * 0.32
        if (this.condition == "Fixed" && this.battery == 100) {
            this.available = true
        }
        else if (this.condition == "Broken" || this.battery !== 100) {
            this.available = false
        }
        this.constructor.scooters.push(this)
    }
}

console.log(Scooter.scooters)

module.exports = Scooter;