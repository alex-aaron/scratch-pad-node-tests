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
  beforeEach(function () {
    sinon.spy(console, 'log');
  });

  afterEach(function () {
    console.log.restore();
  });

  var arrayOne = ['a', 'b', 'c'];
  var arrayTwo = [10, 20, 30];
  var objectOne = {
    firstName: 'Stephanie',
    middleName: 'Karen',
    lastName: 'Cooper'
  };
  var objectTwo = {
    prepAssessment: 80, 
    bootcampAssessment: 95,
    precourseAssessment: 100,
  };

  describe('printArrayValues()', () => {
    it('should log each value in arrayOne', () => {
      printArrayValues(arrayOne);
      console.log.args.forEach((e, i) =>{
        assert.equal(e, arrayOne[i]);
      });
    });
    it('should call log each value in arrayTwo', () => {
      printArrayValues(arrayTwo);
      console.log.args.forEach((e, i) => {
        assert.equal(e, arrayTwo[i]);
      })
    });
  });

  describe('printArrayValuesInReverse()', () => {
    it('should log each value in arrayOne in reverse', () => {
      const reverse = arrayOne.concat().reverse();
      printArrayValuesInReverse(arrayOne);
      console.log.args.forEach((e, i) => {
        assert.equal(e, reverse[i]);
      });
    });

    it('should call log each value in arrayTwo in reverse', () => {
      const reverse = arrayTwo.concat().reverse();
      printArrayValuesInReverse(arrayTwo);
      console.log.args.forEach((e, i) => {
        assert.equal(e, reverse[i]);
      })
    });
  });

  describe('getObjectKeys()', () => {
    it('should return an array', () => {
      assert.equal(Array.isArray(getObjectKeys(objectOne)), true);
    });
    it('should return a correct array of object keys', () => {
      assert.deepEqual(getObjectKeys(objectOne), ['firstName', 'middleName', 'lastName']);
    });
    it('should return a correct array of object keys', () => {
      var tests = [
        {args: { first: "a", second: "b", third: "c"}, expected: ['first', 'second', 'third']},
        {args: { a: 1, b: 2, c: 3 }, expected: [ 'a', 'b', 'c' ]},
        {args: { testOne: 90, testTwo: 95, testThree: 100 }, expected: ['testOne', 'testTwo', 'testThree']}
      ];
      tests.forEach(({args, expected}) => {
        assert.deepEqual(getObjectKeys(args), expected);
      })
    });
  });

})

