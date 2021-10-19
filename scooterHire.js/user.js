const Person = require ("./person")

// Class for User 
class User extends Person {
    static users = []

    constructor(name, age, balance) {
        super(name, age)
        this.balance = balance;
        this.constructor.users.push(this)
    }
}

console.log(User.users)

module.exports =  User;