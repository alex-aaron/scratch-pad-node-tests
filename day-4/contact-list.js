var data = [
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
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

function makeContact(id, nameFirst, nameLast) {
    
} 



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
       
    }
}