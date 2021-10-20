class ScooterHire {
    constructor(scooterID, hiredBy) {
        this.scooterID = []
        this.hiredBy = []
    }
    
    async hireScooter(scooter, user) {
        if (scooter.available == true) {
        scooter.available = false
        user.balance -= 5
        this.scooterID.push(scooter.scooterID)
        this.hiredBy.push(user.name)
        scooter.station = "In use"
        await new Promise(resolve => setTimeout(resolve, 4000));
        console.log("Battery at 50%")
        } 
        else if (scooter.condition == "broken") {
            this.fix(scooter)
        }
        else if (scooter.battery < 100) {
            this.charge(scooter)
        }
    }

    async charge(scooter) {
        console.log("scooter charging");
        await new Promise(resolve => setTimeout(resolve, 4000));
        console.log("Scooter has charged")
        scooter.battery = 100
        if (scooter.battery == 100 && scooter.condition == "Fixed") {
            scooter.available = true
            console.log("Scooter is available to hire")
            console.log(scooter)

        }
    }
    async fix(scooter) {
        console.log("starting repair");
        await new Promise(resolve => setTimeout(resolve, 4000));
        scooter.condition = "Fixed"
        console.log("Scooter has been fixed")
        this.charge(scooter)
    }
    
    async reportBroken(scooter, station) {
        scooter.condition = "Broken"
        console.log("Thank you for reporting")
        this.return(scooter, station)
    }

    async return(scooter, station) {
        scooter.station = station
        if (scooter.condition == "Fixed") {
            this.charge(scooter)
        } else if (scooter.condition == "Broken") {
            this.fix(scooter)
        }
    }
};

module.exports = ScooterHire;