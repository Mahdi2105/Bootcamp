const Person = require ('./familyTreeObj');

const ElizabethII = new Person('Elizabeth II', ['George', 'Elizabeth']);

describe("Family Tree", () => {
    test("Should return name", () => {
        expect(ElizabethII.name).toBe("Elizabeth II")
    })
});