var gen1 = [
    {
      name: 'Elizabeth II',
      parents: ["George", "Elizabeth"],
      childOf: function () {
        return this.parents;
      },
      },
    {
      name: 'Margaret',
      parents: ["N/A"],
      childOf: function () {
        return this.parents;
      },
    },
    {
      name: 'Philip',
      parents: ["N/A"],
      childOf: function () {
        return this.parents;
      },
    },
  ];

var gen2 = [
    {
      name: 'Camila',
      parents: ["N/A"],
      childOf: function () {
        return this.parents;
      },
    },
    {
      name: 'Charles',
      parents: ["Philip", "Elizabeth II"],
      childOf: function () {
        return this.parents;
      },
    },
    {
      name: 'Diana',
      parents: ["N/A"],
      childOf: function () {
        return this.parents;
      },
    },
    {
      name: 'Anne',
      parents: ["Philip", "Elizabeth II"],
      childOf: function () {
        return this.parents;
      },
    },
    {
      name: 'Andrew',
      parents: ["Philip", "Elizabeth II"],
      childOf: function () {
        return this.parents;
      },
    },
    {
      name: 'Edward',
      parents: ["Philip", "Elizabeth II"],
      childOf: function () {
        return this.parents;
      },
    },
  ];

var gen3 = [
    {
      name: 'Catherine',
      parents: ["N/A"],
      childOf: function () {
        return this.parents;
      },
    },
    {
      name: 'William',
      parents: ["Charles", "Diana"],
      childOf: function () {
        return this.parents;
      },
    },
    {
      name: 'Harry',
      parents: ["Charles", "Diana"],
      childOf: function () {
        return this.parents;
      },
    },
    {
      name: 'Meghan',
      parents: ["N/A"],
      childOf: function () {
        return this.parents;
      },
    },
  ];
  //Type Gen 1,2 or 3 and then the index to get the parents
  console.log(gen2[3].childOf())
  