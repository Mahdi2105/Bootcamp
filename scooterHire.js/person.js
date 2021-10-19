// Class for person
class Person {
    constructor(name,age) {
        this.name = name
        if (age < 18){
            throw new Error("Must be 18 or overto hire and ride a scooter or to be a member of staff")
        }
        else {
        this.age = age 
        }
    }
}
/*person1 = new Person ("Mahdi", 18)

console.log(person1)*/

module.exports = Person;