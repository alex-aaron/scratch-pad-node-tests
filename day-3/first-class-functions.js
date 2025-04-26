/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
  // YOUR CODE BELOW HERE //
  
  // YOUR CODE ABOVE HERE //
}

/** 
* Given an input base to test against, which could be a String or Number, 
* return a Function that tests whether a given value is less than the 
* base. (test means return true or false)
* 
*/
function createLessThanFilter(base) {
  // YOUR CODE BELOW HERE //
  
  // YOUR CODE ABOVE HERE //
}

/** 
* Given a startsWith character, which will be a single character, return a 
* Function that tests whether a given String starts with the startsWith 
* character.
* 
* This function needs to be case insensitive.
*/
function createStartsWithFilter(startsWith) {
  // YOUR CODE BELOW HERE //
  
  // YOUR CODE ABOVE HERE //
}

/** 
* Given a endsWith character, which will be a single character, return a 
* Function that tests whether a given String ends with the endsWith 
* character.
* 
* This function needs to be case insensitive.
*/
function createEndsWithFilter(endsWith) {
  // YOUR CODE BELOW HERE //
  
  // YOUR CODE ABOVE HERE //
}

/** 
* Given an Array of Strings and a Function designed to modify a String, 
* return the Array of the Strings, modified.
* 
* TIP: You need to loop over the Strings, right? We need to pass each String to 
* the modify Function, but we need to collect the results into some collection.
*/
function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //
  
  // YOUR CODE ABOVE HERE //
}



/** 
* Given an Array of Strings and a Function designed to test the String in some 
* way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
* 
* Imagine you had a list of names, and you wanted to test they all 
* begin with "C", or they are all exclaimations that end with "!".
* 
* TIP: You need to loop over the Strings, right? And pass them to the test?
*/
function allStringsPass(strings, test) {
  // YOUR CODE BELOW HERE //
 
  // YOUR CODE ABOVE HERE
}

// DO NOT REMOVE //
module.exports = {
  createGreaterThanFilter: createGreaterThanFilter,
  createLessThanFilter: createLessThanFilter,
  createStartsWithFilter: createStartsWithFilter,
  createEndsWithFilter: createEndsWithFilter,
  modifyStrings: modifyStrings,
  allStringsPass: allStringsPass
};