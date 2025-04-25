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

// describe("loops", () => {
//   beforeEach(function () {
//     sinon.spy(console, 'log');
//   });

//   afterEach(function () {
//     console.log.restore();
//   });

//   var arrayOne = ['a', 'b', 'c'];
//   var arrayTwo = [10, 20, 30];
//   var objectOne = {
//     firstName: 'Stephanie',
//     middleName: 'Karen',
//     lastName: 'Cooper'
//   };
//   var objectTwo = {
//     prepAssessment: 80, 
//     bootcampAssessment: 95,
//     precourseAssessment: 100,
//   };


//   describe('getObjectKeys()', () => {
//     it('should return an array', () => {
//       assert.equal(Array.isArray(getObjectKeys(objectOne)), true);
//     });
//     it('should return a correct array of object keys', () => {
//       assert.deepEqual(getObjectKeys(objectOne), ['firstName', 'middleName', 'lastName']);
//     });
//     it('should return a correct array of object keys', () => {
//       var tests = [
//         {args: { first: "a", second: "b", third: "c"}, expected: ['first', 'second', 'third']},
//         {args: { a: 1, b: 2, c: 3 }, expected: [ 'a', 'b', 'c' ]},
//         {args: { testOne: 90, testTwo: 95, testThree: 100 }, expected: ['testOne', 'testTwo', 'testThree']}
//       ];
//       tests.forEach(({args, expected}) => {
//         assert.deepEqual(getObjectKeys(args), expected);
//       })
//     });
//   });

//   describe('printObjectKeys()', () => {
//     it('should log each each key in an object', () => {
//       var tests = [
//         {input: { first: "a", second: "b", third: "c"}, expected: ['first', 'second', 'third']},
//         {input: { a: 1, b: 2, c: 3 }, expected: [ 'a', 'b', 'c' ]},
//         {input: { testOne: 90, testTwo: 95, testThree: 100 }, expected: ['testOne', 'testTwo', 'testThree']}
//       ];

//       tests.forEach(({input, expected}) => {
//         // input = { first: 'a', } // expected = ['first', ...]
//         printObjectKeys(input);
//         console.log.args.forEach((e, i) => {
//           assert.equal(e[0], expected[i]);
//         });
//       });
//     })
//   });

// })

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
});
