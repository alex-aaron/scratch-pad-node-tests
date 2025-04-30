const mocha = require('mocha');
const describe = mocha.describe;
const chai = require('chai');
const { assert, expect } = chai;
const sinon = require('sinon');
const _ = require('underscore');
const { range } = require('../day-3/homework/range');

describe("range()", () => {

  it('should return an array', () => {
    assert.equal(Array.isArray(range(4, 8)), true);
  });
  it('should return an empty an array if the inputs are equal', () => {
    assert.deepEqual(range(4, 4), []);
    assert.deepEqual(range(10, 10), []);
  });
  it('should return a descending range if first input is greater', () => {
    assert.deepEqual(range(8, 4), [8, 7, 6, 5, 4]);
    assert.deepEqual(range(5, 3), [5, 4, 3]);
  });
  it('should return an ascending range if first input is less than', () => {
    assert.deepEqual(range(4, 8), [4, 5, 6, 7, 8]);
    assert.deepEqual(range(3, 5), [3, 4, 5]);
  })
})