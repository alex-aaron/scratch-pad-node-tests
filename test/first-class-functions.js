const mocha = require('mocha');
const describe = mocha.describe;
const chai = require('chai');
const { assert, expect } = chai;
const sinon = require('sinon');
const _ = require('underscore');
const {
  createGreaterThanFilter,
  createLessThanFilter,
  createStartsWithFilter,
  createEndsWithFilter,
  modifyStrings,
  allStringsPass
} = require("../day-3/first-class-functions");

describe("first-class-functions", () => {
  
  describe("createGreaterThanFilter()", () => {
    it('should return a function', () => {
      assert.equal(typeof createGreaterThanFilter, 'function');
    })
    it('should return a function that tests whether a value is greater than an input base', () => {
      var greaterThanZero = createGreaterThanFilter(0);
      assert.equal(greaterThanZero(10), true);
      assert.equal(greaterThanZero(-10), false);
    });
  });

  describe("createLessThanFilter()", () => {
    it('should return a function', () => {
      assert.equal(typeof createLessThanFilter, 'function');
    })
    it('should return a function that tests whether a value is greater than an input base', () => {
      var lessThanZero = createLessThanFilter(0);
      assert.equal(lessThanZero(10), false);
      assert.equal(lessThanZero(-10), true);
    });
  });

    describe("createStartsWithFilter()", () => {
      it('should return a function', () => {
        assert.equal(typeof createStartsWithFilter, 'function');
      });
      it('should return return that returns true if an input string begins with a target character', () => {
        var startsWithC = createStartsWithFilter('C');
        var startsWithJ = createStartsWithFilter('j');
        expect(startsWithC('Carol')).to.be.true;
        expect(startsWithC('carol')).to.be.true;
        expect(startsWithJ('jack')).to.be.true;
        expect(startsWithJ('Jack')).to.be.true;
        expect(startsWithJ('Alex')).to.be.false;
        expect(startsWithC('David')).to.be.false;
      });
    });

    describe("createEndsWithFilter()", function () {
      it('should return a function', () => {
        assert.equal(typeof createEndsWithFilter, 'function');
      });
      it('should return a function that tests whether an input string ends with a target character', () => {
          var endsWithK = createEndsWithFilter('k');
          var endsWithM = createEndsWithFilter('M');
          expect(endsWithK('Dork')).to.be.true;
          expect(endsWithK('DORK')).to.be.true;
          expect(endsWithM('Dorm')).to.be.true;
          expect(endsWithM('DORM')).to.be.true;
          expect(endsWithM('Dormant')).to.be.false;
          expect(endsWithK('Dorky')).to.be.false;
      });
    });

    describe('modifyStrings()', () => {
      var tests = [
        {input: ['a', 'b', 'c'], expected: ['a!', 'b!', 'c!'], func: (e) => e + '!'},
        {input: ['a', 'an', 'the'], expected: ['A', 'AN', 'THE'], func: (e) => e.toUpperCase()},
        {input: ['HELLO',  'WORLD'], expected: ['hello?', 'world?'], func: (e) => e.toLowerCase() + "?"}
      ];
      it('should return an array of strings', () => {
        tests.forEach((e, i) => {
          var result = modifyStrings(e.input, e.func);
          var allStrings = _.every(result, (item) => typeof item === 'string');
          assert.equal(allStrings, true);
        });
      });
      it('should return a new array of strings correctly modified by the input function', () => {
        tests.forEach((e, i) => {
          assert.deepEqual(modifyStrings(e.input, e.func), e.expected);
        });
      });
    });

    describe('allStringsPass()', () => {
      var tests = [
        {input: ['a', 'an', 'at'], func: (e) => e[0] === 'a', expected: true },
        {input: ['a', 'an', 'the'], func: (e) => e[0] === 'a', expected: false},
        {input: ['fizz', 'buzz'], func: (e) => e[e.length -1] === 'z', expected: true},
        {input: ['fizz', 'buzz', 'bubble'], func: (e) => e[e.length - 1] === 'z', expected: false}
      ]
      it("should return a boolean depending on whether every item in the array passes the callback function's test", () => {
        tests.forEach((e, i) => {
          assert.equal(typeof allStringsPass(e.input, e.func), 'boolean');
        });
      });
      it("should return a correct boolean value depending on whether every item in the array passes callback function's test", () => {
        tests.forEach((e, i) => {
          assert.equal(allStringsPass(e.input, e.func), e.expected);
        })
      })
    });

});