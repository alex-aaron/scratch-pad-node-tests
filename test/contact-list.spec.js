const mocha = require('mocha');
const describe = mocha.describe;
const chai = require('chai');
const { assert, expect } = chai;
const sinon = require('sinon');
const _ = require('underscore');
const {
  contacts,
  makeContact,
  length,
  addContact,
  findContact,
  removeContact,
  getAllContactNames
} = require('../day-4/contact-list');

describe("contact-list", () => {

  var tests = [
    {input:[0, 'Stephanie', 'Cooper'], expected: {id: 0, nameFirst: 'Stephanie', nameLast: 'Cooper'}},
    {input:[1, 'Bethany', 'Joseph'], expected: {id: 1, nameFirst: 'Bethany', nameLast: 'Joseph'}},
    {input:[2, 'Nathan', 'Coen'], expected: {id: 2, nameFirst: 'Nathan', nameLast: 'Coen'}}
  ];

  describe("makeContact()", () => {
    it('should return an object', () => {
      expect(makeContact(0, 'Stephanie', 'Cooper')).to.be.an('object');
    });
    it('should return a correct contact object', () => {
      tests.forEach((e, i) => {
        var [id, nameFirst, nameLast ] = e.input;
        assert.deepEqual(makeContact(id, nameFirst, nameLast), e.expected);
      })
    });
  });

  describe("length", () => {
    it('should return a number', () => {
      assert.equal(typeof length(), 'number');
    });
    it('should return the correct length of the contacts array', () => {
      assert.equal(length(), contacts.length);
    })
  });

  describe("addContact()", () => {
    var tests = [
      {input:[11, 'Stephanie', 'Cooper'], contact: {id: 11, nameFirst: 'Stephanie', nameLast: 'Cooper'}},
      {input:[12, 'Bethany', 'Joseph'], contact: {id: 12, nameFirst: 'Bethany', nameLast: 'Joseph'}},
      {input:[13, 'Nathan', 'Coen'], contact: {id: 13, nameFirst: 'Nathan', nameLast: 'Coen'}}
    ];
    it('should add a correct contact object to contacts array', () => {
      tests.forEach((e, i) => {
        var [ id, nameFirst, nameLast ] = e.input;
        var contact = makeContact(id, nameFirst, nameLast);
        addContact(contact);
        expect(contacts).to.deep.include(contact);
      });
    })
  });

  describe("findContact()", () => {
    var tests = [
      {input:'Stephanie Cooper', expected: {id: 11, nameFirst: 'Stephanie', nameLast: 'Cooper'}},
      {input:'Bethany Joseph', expected: {id: 12, nameFirst: 'Bethany', nameLast: 'Joseph'}},
      {input:'Nathan Coen', expected: {id: 13, nameFirst: 'Nathan', nameLast: 'Coen'}}
    ];
    it('should return a contact object if found', () => {
      assert.deepEqual
    })
  })

});