const mocha = require('mocha');
const describe = mocha.describe;
const chai = require('chai');
const { assert, expect } = chai;
const sinon = require('sinon');
const loops = require("../day-2/loops");
const { getTargetUpperCase } = loops;

describe("getTargetUpperCase", function(){
  it('should target string uppercased', () => {
    assert.equal(getTargetUpperCase(['alex', 'francis', 'aaron'], 'alex'), 'ALEX');
  })
});