// Class for Scooter 
class Scooter{
    static scooters = []

    constructor(scooterID, condition, battery, available) {
        this.scooterID = scooterID
        this.condition = condition
        this.battery = battery
        this.available = available
    }
}

module.exports = Scooter;