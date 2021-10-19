const Person = require ("./person")

// Class for Staff 
class Staff extends Person {
    static staff1 = []

    constructor(name, age) {
        super(name, age)
        this.constructor.staff1.push(this)
    }
}

//console.log(Staff.staff1)

module.exports = Staff;