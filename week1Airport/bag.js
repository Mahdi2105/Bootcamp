// CLass for bags
class Bag {
    
    constructor(weight) {

        if (weight == undefined){
            throw new Error("Bag must have a weight")
        }
        else if (weight > 25) {
            throw new Error("Bag is over limit")
        }
        else {
        this.weight = weight
        };

    }
    
    /*OverLimit(limit) {
        if (this.weight > 25) return true
    }*/
}

const bag = new Bag(12)
console.log(bag.weight) 

module.exports = Bag;