// CLass for bags
class Bag {
    
    constructor(weight) {

        if (weight == undefined){
            throw new Error("Bag must have a weight")
        }
        else {
        this.weight = weight
        }
    }
}

const bag = new Bag(16)
console.log(bag.weight) 

module.exports = Bag;