/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
  // YOUR CODE BELOW HERE //
  return Array.isArray(value);
  // YOUR CODE ABOVE HERE //
}


/** 
* Given an input value, return true if the value is an Object intended as a 
* collection, false if otherwise.
* 
* TIP: In JavaScript, how can we decipher if a value is an Object, but not 
* null, not an Array, not a Date - all of these will return 'object' if used 
* with typeof.
* 
* Example:
*   isObject({ a: 1, b: 2 }); // => true
*   isObject('string'); // => false
*   isObject(['a', 'b', 'c']); // => false
* 
* HINT: look up how to figure out if something is an instance of the Date object.
* 
*/
function isObject(value) {
  // YOUR CODE BELOW HERE //
  if (typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date)){
    return true;
  } else {
    return false;
  }
  // YOUR CODE ABOVE HERE //
}



/** 
* Given an input value, return true if is either an Array or an an Object 
* intended as a collection, false if otherwise.
* 
* TIP: Similar to isObject, but we must return true if the value is an Array.
*/
function isCollection(value) {
  // YOUR CODE BELOW HERE //
  if (Array.isArray(value)){
    return true;
  } else if (typeof value === 'object' && value !== null && !(value instanceof Date)){
    return true;
  } else {
    return false;
  }
  // YOUR CODE ABOVE HERE //
}

/**
* Given an input value, return the type of the value as a String
* 
* Types are one of: 
*    - "string"
*    - "array"
*    - "object"
*    - "undefined"
*    - "number"
*    - "boolean"
*    - "null"
*    - "function"
*    - "date"
* 
* Examples:
*    typeOf(134) -> "number"
*    typeOf("javascript") -> "string"
*    typeOf([1,2,3]) -> "array"
*/ 
function typeOf(value) {
  // YOUR CODE BELOW HERE //
  if (typeof value !== 'object'){
    return typeof value;
  } else if (Array.isArray(value)){
    return 'array'
  } else if (value === null){
    return 'null'
  } else if (value instanceof Date){
    return 'date'
  } else {
    return 'object'
  }
  // YOUR CODE ABOVE HERE //
}

// DO NOT REMOVE //
module.exports = {
  isArray: isArray,
  isObject: isObject,
  isCollection: isCollection,
  typeOf: typeOf
}