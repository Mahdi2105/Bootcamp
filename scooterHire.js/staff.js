const Person = require ("./person")

// Class for Staff 
class Staff extends Person {
    static staff1 = []

    constructor(name, age) {
        super(name, age)
    }
}

module.exports = Staff;