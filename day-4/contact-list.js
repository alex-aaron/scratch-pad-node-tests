var contacts = [
  {
      "id": 1,
      "nameFirst": "Max",
      "nameLast": "Gaudin" 
  },
  {
      "id": 2,
      "nameFirst": "John",
      "nameLast": "Fraboni"
  },
  {
      "id": 3,
      "nameFirst": "Alon",
      "nameLast": "Robinson"
  },
  {
      "id": 4,
      "nameFirst": "Mykia",
      "nameLast": "Smith"
  },
  {
      "id": 5,
      "nameFirst": "Steve",
      "nameLast": "Price"
  },
  {
      "id": 6,
      "nameFirst": "George",
      "nameLast": "Mauer"
  },
  {
      "id": 7,
      "nameFirst": "Ben",
      "nameLast": "Schenker"
  },
  {
      "id": 8,
      "nameFirst": "Jaelle",
      "nameLast": "Schuerman"
  },
  {
      "id": 9,
      "nameFirst": "Erika",
      "nameLast": "Fraboni"
  },
  {
      "id": 10,
      "nameFirst": "Alice",
      "nameLast": "Green"
  }
];

/**
 * Create a factory function called makeContact(id, nameFirst, nameLast) that returns a contact object.
 * 
 * Example:
 *      makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 */

function makeContact(id, nameFirst, nameLast) {
	return {
			id: id,
			nameFirst: nameFirst,
			nameLast: nameLast
	};
} 

/**
 * Create a function called length that returns the number of contacts in the contacts array.
 */
function length(){
	return contacts.length;
}

/**
 * Create a function called addContact that takes a contact object and adds it to the contacts
 * array.
 */
function addContact(contact){
	contacts.push(contact);
}

/**
 * Create a function called findContact that takes a full-name string, like "Max Gaudin", and returns
 * the contact object in contacts that matches the full-name. If no match is found, the function should
 * return undefined.
 */
function findContact(fullName){

}

/**
 * Create a function called removeContact that takes in a contact object to be removed from
 * the contacts array.
 */
function removeContact(contact){

}

/**
 * Create a function called getAllContactNames that returns a string of every contact's full-name
 * separated by a line-break character.
 * 
 * WARNING: To pass all of the tests, the final name in the output string should NOT have a line-break
 * character.
 */
function getAllContactNames(){

}

// DO NOT REMOVE //
module.exports = {
    contacts: contacts,
    makeContact: makeContact,
    length: length,
    addContact: addContact,
    findContact: findContact,
    removeContact: removeContact,
    getAllContactNames: getAllContactNames
}