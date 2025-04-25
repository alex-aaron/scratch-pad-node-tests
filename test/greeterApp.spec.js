const mocha = require('mocha');
const describe = mocha.describe;
const chai = require('chai');
const { assert, expect } = chai;
const sinon = require('sinon');
const { greeterApp } = require("../day-2/greeterApp");

describe("greeterApp()", () => {
  it('It should return `Good Morning!` if the hour is between 0-11', () => {
    assert.equal(greeterApp(0), 'Good Morning!');
    assert.equal(greeterApp(5), 'Good Morning!');
  });
  it('It should return `Good Afternoon!` if the hour is between 12-16', () => {
    assert.equal(greeterApp(12), 'Good Afternoon!');
    assert.equal(greeterApp(16), 'Good Afternoon!');
  });
  it('It should return `Good Evening!` if the hour is between 17-21', () => {
    assert.equal(greeterApp(17), 'Good Evening!');
    assert.equal(greeterApp(20), 'Good Evening!');
  });
  it('It should return `Good Night!` if the hour is between 22-24', () => {
    assert.equal(greeterApp(22), 'Good Night!');
    assert.equal(greeterApp(23), 'Good Night!');
  });
})