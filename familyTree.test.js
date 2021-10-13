const {gen1, gen2, gen3} = require ("familyTree.js") ;

describe("Family Tree", () => {
    test("Should return parents", () => {
        expect(gen1[0].name).toBe("Elizabeth II")
    })
});
