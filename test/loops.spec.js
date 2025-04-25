const mocha = require('mocha');
const describe = mocha.describe;
const chai = require('chai');
const { assert, expect } = chai;
const sinon = require('sinon');
const loops = require("../day-2/loops");
const { 
  printArrayValues,
  printArrayValuesInReverse,
  getObjectKeys,
  printObjectKeys,
  getObjectValues,
  printObjectValues,
  printObjectValuesInReverse,
  getObjectLength,
} = loops;

describe("loops", () => {

  describe("printArrayValues()", () => {
    beforeEach(() => {
      sinon.spy(console, 'log');
    });
    afterEach(() => {
      console.log.restore();
    });
    
    var tests = [
      {input: ['a', 'b', 'c'], expected: ['a', 'b', 'c']},
      {input: ['first', 'second', 'third'], expected: ['first', 'second', 'third']},
      {input: [10, 20, 30], expected: [10, 20, 30]},
    ];

    tests.forEach((e, i) => {
      printArrayValues(e.input);
      it(`should log each value in array ${i}`, () => {
        console.log.args.forEach((current, index) => {
          assert.equal(current[0], e.expected[index]);
        })
      })
    })
  });

  describe("printArrayValuesInReverse()", () => {
    beforeEach(() => {
      sinon.spy(console, 'log');
    });
    afterEach(() => {
      console.log.restore();
    });

    var tests = [
      {input: ['a', 'b', 'c'], expected: ['c', 'b', 'a']},
      {input: ['first', 'second', 'third'], expected: ['third', 'second', 'first']},
      {input: [10, 20, 30], expected: [30, 20, 10]},
    ];

    tests.forEach((e, i) => {
      it(`should log each value in array ${i} in reverse`, () => {
        printArrayValuesInReverse(e.input);
        console.log.args.forEach((current, index) => {
          assert.equal(current[0], e.expected[index]);
        });
      });
    });

  });

  describe("getObjectKeys", () => {
    beforeEach(() => {
      sinon.spy(console, 'log');
    });
    afterEach(() => {
      console.log.restore();
    });

    var tests = [
      {input: { first: "a", second: "b", third: "c"}, expected: ['first', 'second', 'third']},
      {input: { a: 1, b: 2, c: 3 }, expected: [ 'a', 'b', 'c' ]},
      {input: { testOne: 90, testTwo: 95, testThree: 100 }, expected: ['testOne', 'testTwo', 'testThree']}
    ];

    it('should return an array', () => {
      assert.equal(Array.isArray(getObjectKeys({ a: 1, b: 2, c: 3})), true);
      assert.equal(Array.isArray(getObjectKeys({ first: "a", second: "b"})), true);
    });

    it('should not use Object.keys method', () => {
      assert.equal(getObjectKeys.toString().includes('Object.keys('), false);
    });

    tests.forEach((e, i) => {
      it(`should return object ${i}'s keys in an array`, () => {
        assert.deepEqual(getObjectKeys(e.input), e.expected);
      })
    });

  });

  describe("printObjectKeys", () => {
    beforeEach(() => {
      sinon.spy(console, 'log');
    });
    afterEach(() => {
      console.log.restore();
    });

    var tests = [
      {input: { first: "a", second: "b", third: "c"}, expected: ['first', 'second', 'third']},
      {input: { a: 1, b: 2, c: 3 }, expected: [ 'a', 'b', 'c' ]},
      {input: { testOne: 90, testTwo: 95, testThree: 100 }, expected: ['testOne', 'testTwo', 'testThree']}
    ];

    tests.forEach((e, i) => {
      it(`should log each key in object ${i}`, () => {
        printObjectKeys(e.input);
        console.log.args.forEach((current, index) => {
          assert.equal(current[0], e.expected[index]);
        })
      });
      
    });
  })

  describe("printObjectValues", () => {
    beforeEach(() => {
      sinon.spy(console, 'log');
    });
    afterEach(() => {
      console.log.restore();
    });

    var tests = [
      {input: { first: "a", second: "b", third: "c"}, expected: ["a", "b", "c"]},
      {input: { a: 1, b: 2, c: 3 }, expected: [1, 2, 3]},
      {input: { testOne: 90, testTwo: 95, testThree: 100 }, expected: [90, 95, 100]}
    ];

    tests.forEach((e, i) => {
      it(`should log each value in object ${i}`, () => {
        printObjectValues(e.input);
        console.log.args.forEach((current, index) => {
          assert.equal(current[0], e.expected[index]);
        });
      });
    })
  });

  describe("getObjectValues", () => {
    var tests = [
      {input: { first: "a", second: "b", third: "c"}, expected: ["a", "b", "c"]},
      {input: { a: 1, b: 2, c: 3 }, expected: [1, 2, 3]},
      {input: { testOne: 90, testTwo: 95, testThree: 100 }, expected: [90, 95, 100]}
    ];

    it('should return an array', () => {
      assert.equal(Array.isArray(getObjectValues(tests[0].input)), true);
      assert.equal(Array.isArray(getObjectValues(tests[1].input)), true);
    });

    it('should not use Object.values method', () => {
      assert.equal(getObjectValues.toString().includes('Object.values('), false);
    });

    tests.forEach((e, i) => {
      it(`should return an array of object ${i}'s keys`, () => {
        assert.deepEqual(getObjectValues(e.input), e.expected);
      })
    })
  });

  describe("getObjectLength", () => {
    var tests = [
      {input: { first: "a", second: "b"}, expected: 2},
      {input: { a: 1, b: 2, c: 3 }, expected: 3},
      {input: { testOne: 90, testTwo: 95, testThree: 100, testFour: 100 }, expected: 4}
    ];

    it('should return a number', () => {
      assert.equal(typeof getObjectLength(tests[0].input), 'number');
      assert.equal(typeof getObjectLength(tests[1].input), 'number');
    });

    tests.forEach((e, i) => {
      it(`should return the length of object ${i}`, () => {
        assert.equal(getObjectLength(e.input), e.expected);
      })
    });
  });

  describe("printObjectValuesInReverse()", () => {
    beforeEach(() => {
      sinon.spy(console, 'log');
    });
    afterEach(() => {
      console.log.restore();
    });

    var tests = [
      {input: { first: "a", second: "b", third: "c"}, expected: ["c", "b", "a"]},
      {input: { a: 1, b: 2, c: 3 }, expected: [3, 2, 1]},
      {input: { testOne: 90, testTwo: 95, testThree: 100 }, expected: [100, 95, 90]}
    ];

    it('should not use Object.values() method', () => {
      assert.equal(printObjectValuesInReverse.toString().includes('Object.values('), false);
    })

    tests.forEach((e, i) => {
      it(`should log the values in object ${i} in reverse`, () => {
        printArrayValuesInReverse(e.input);
        console.log.args.forEach((current, index) => {
          assert.equal(current[0], e.expected[index]);
        });
      });
    });
  });
});
