// Class for Scooter 
class Scooter{
    static scooters = []

    constructor(scooterID, location, condition, battery, hiredBy, available) {
        this.scooterID = scooterID
        this.location = location
        this.condition = condition
        this.battery = battery
        this.hiredBy = hiredBy
        if (this.condition == "Fixed" && this.battery == 100 && this.hiredBy == undefined) {
            this.available = true
        }
        else if (this.condition == "Broken" || this.battery < 100 || this.hiredBy !== undefined ) {
            this.available = false
        }
        this.constructor.scooters.push(this)
    }
}

console.log(Scooter.scooters)

module.exports = Scooter;