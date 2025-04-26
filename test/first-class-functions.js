const mocha = require('mocha');
const describe = mocha.describe;
const chai = require('chai');
const { assert, expect } = chai;
const sinon = require('sinon');
const {
  createGreaterThanFilter,
  createLessThanFilter,
  createStartsWithFilter,
  createEndsWitFilter,
  modifyStrings,
  allStringsPass
} = require("../day-3/first-class-functions");

describe("first-class-functions", () => {
  
})