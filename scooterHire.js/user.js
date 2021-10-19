const Person = require ("./person")

// Class for User 
class User extends Person {
    static users = []

    constructor(name, age, money) {
        super(name, age)
        this.money = money;
    }
}

module.exports =  User;