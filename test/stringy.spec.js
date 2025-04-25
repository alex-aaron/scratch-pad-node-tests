const mocha = require('mocha');
const describe = mocha.describe;
const chai = require('chai');
const { assert, expect } = chai;
const sinon = require('sinon');
const stringy = require("../day-1/stringy");
const {
  length,
  toUpperCase,
  toLowerCase,
  toDashCase,
  beginsWith,
  endsWith,
  concat,
  join,
  longest,
  sortAscending,
  sortDescending
 } = stringy;

describe("stringy", () => {
  
  describe("length()", function(){
    it('should return the length of a string', () => {
      assert.equal(length('hello'), 5);
      assert.equal(length('JavaScript'), 10);
    });
  });

  describe("toLowerCase()", function () {
    it('should return a lowercase version of the input String', function() {
        expect(toLowerCase('HELLO')).to.equal('hello');
        expect(toLowerCase('GOODBYE')).to.equal('goodbye');
    });
  });

  describe("toUpperCase()", function () {
      it('should return an uppercase version of the input String', function() {
          expect(toUpperCase('hello')).to.equal('HELLO');
          expect(toUpperCase('goodbye')).to.equal('GOODBYE');
      });
  });

  describe("toDashCase()", function () {
      it('should return a dash-cased version of the input String', function() {
          expect(toDashCase('Hello World')).to.equal('hello-world');
          expect(toDashCase('Should Work With Many Words')).to.equal('should-work-with-many-words');
      });
  });

  describe("beginsWith()", function () {
    it('should return true if the input String begins with the input character, false otherwise', function() {
        expect(beginsWith('Hello World', 'h')).to.be.true;
        expect(beginsWith('Hello World', 'H')).to.be.true;
        expect(beginsWith('Hello World', 'a')).to.be.false;
    });
  });

  describe("endsWith()", function () {
      it('should return true if the input String ends with the input character, false otherwise', function() {
          expect(endsWith('Hello World', 'd')).to.be.true;
          expect(endsWith('Hello World', 'D')).to.be.true;
          expect(endsWith('Hello World', 'a')).to.be.false;
      });
  });

  describe("concat()", function () {
      it('should return the two input Strings concatenated', function() {
          expect(concat('Hello', 'World')).to.equal('Hello World');
          expect(concat('Operation', 'Spark')).to.equal('Operation Spark');
      });
  });

});
