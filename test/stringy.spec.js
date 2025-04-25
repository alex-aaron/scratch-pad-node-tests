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

describe("length()", function(){
  it('should return the length of a string', () => {
    assert.equal(length('hello'), 5);
  })
})