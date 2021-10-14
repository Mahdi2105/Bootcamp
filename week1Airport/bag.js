// CLass for bags
class Bag {
    
    constructor(weight) {

        if (weight == undefined){
            throw new Error("Bag must have a weight")
        }
        /*else if (weight > 30) {
            throw new Error("Bag is over limit")
        }*/
        else {
        this.weight = weight
        };

    }
    
    isOverLimit(limit) {
        return this.weight > 25 ? true : false
    }
}

const bag = new Bag(12)
console.log(bag.weight) 

module.exports = Bag;