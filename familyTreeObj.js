class Person {
    constructor(name, parents,){
        this.name = name; 
        this.parents = parents;
    }
    childOf() {
        return this.parents;
      }
}

const ElizabethII = new Person('Elizabeth II', ['George', 'Elizabeth']);
const Margaret = new Person('Margaret', ['N/A']);
const Philip = new Person('Philip', ['N/A'])

console.log(ElizabethII);

module.exports = Person;