
const {gen1, gen2, gen3} = require ('./familyTree');

describe("Family Tree", () => {
    test("Should return name", () => {
        expect(gen1[0].name).toBe("Elizabeth II")
    })
});

describe("Family Tree", () => {
    test("Should return parents", () => {
        expect(gen1[0].childOf()).toStrictEqual(["George", "Elizabeth"])
    })
});
