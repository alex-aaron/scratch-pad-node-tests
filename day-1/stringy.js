/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

function length(string) {
  // YOUR CODE BELOW HERE //
  return string.length;
  // YOUR CODE ABOVE HERE //
}

/**
* Given an input String, return a new String forced to lowercase.
*/
function toLowerCase(string) {
  // YOUR CODE BELOW HERE //
  return string.toLowerCase();
  // YOUR CODE ABOVE HERE //
}

/**
* Given an input String, return a new String forced to uppercase.
*/

function toUpperCase(string) {
  // YOUR CODE BELOW HERE //
  return string.toUpperCase();
  // YOUR CODE ABOVE HERE //
}

/**
* Given an input String, return a new String forced to dash-case.
*
* Examples:
*
*      toDashCase('Hello World'); // => 'hello-world'
*
* TIP: How can you look for and replace a space in a String? How can you
*      enforce lowercase? Look at the global replace link below, or, try String
*      methods split and join?
*
*      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
*/

function toDashCase(string) {
  // YOUR CODE BELOW HERE //
  return string.split(" ").join("-").toLowerCase();
  // YOUR CODE ABOVE HERE //
}

/**
* Given an input String and a single character, return true if the String
* begins with the character, false otherwise. The Function is case insensitive.
*
* Example:
*
*      beginsWith('Max', 'm'); // => true;
*      beginsWith('Max', 'z'); // => false;
*
* TIP: How can you use Array access to your advantage here? How can you
*      ensure uppercase and lowercase can be compared equally?
*/

function beginsWith(string, char) {
  // YOUR CODE BELOW HERE //
  return string[0].toUpperCase() === char.toUpperCase();
  // YOUR CODE ABOVE HERE //
}

/**
* Given an input String and a single character, return true if the String
* ends with the character, false otherwise. The Function is case insensitive.
*
* Example:
*
*      endsWith('Max', 'X'); // => true;
*      endsWith('Max', 'z'); // => false;
*
* TIP: How can you use Array access to your advantage here? How can you
*      ensure uppercase and lowercase can be compared equally?
*/

function endsWith(string, char) {
  // YOUR CODE BELOW HERE //
  return string[string.length - 1].toUpperCase() === char.toUpperCase();
  // YOUR CODE ABOVE HERE //
}

/**
* Given two input Strings, return the Strings concatenated into one.
*
* Example:
*     concat('Hello', 'World'); // => 'Hello World'
*
* TIP: What's the operator to concatenate two Strings?
*/

function concat(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  return stringOne + " " + stringTwo;
  // YOUR CODE ABOVE HERE //
}

/**
* Given any number of Strings, return all of them joined together.
*
* Example:
*
*      join("my", "name", "is", "Ben"); // => "mynameisBen";
*
* TIP: This Function pulls out all the arguments passed to it and stores them
*      in an Array called args.
*/

function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  var args = Array.from(arguments);
  return args.join(" ");
  // YOUR CODE ABOVE HERE //
}

/**
* Given two Strings, return the longest of the two.
*
* Example:
*
*      longest("ben", "maggie");   //-> "maggie"
*
* TIP: What property of the String do we need to compare?
*/

function longest(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  if (stringOne.length > stringTwo.length){
    return stringOne;
  } else {
    return stringTwo;
  }
  // YOUR CODE ABOVE HERE //
}

/**
* Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
* the second, return -1 if the second is higher in alphabetical order than the
* first, and return 0 if they're equal.
*
* TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
*/

function sortAscending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  if (stringOne < stringTwo){
    return 1;
  } else if (stringOne > stringTwo){
    return -1;
  } else {
    return 0;
  }
  // YOUR CODE ABOVE HERE //
}


/**
* Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
* the second, return -1 if the second is lower in alphabetical order than the
* first, and return 0 if they're equal.
*
* TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
*/

function sortDescending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  if (stringOne < stringTwo){
    return -1;
  } else if (stringOne > stringTwo){
    return 1;
  } else {
    return 0;
  }
  // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE // 
module.exports = {
  length: length,
  toLowerCase: toLowerCase,
  toUpperCase: toUpperCase,
  toDashCase: toDashCase,
  beginsWith: beginsWith,
  endsWith: endsWith,
  concat: concat,
  join: join,
  longest: longest,
  sortAscending: sortAscending,
  sortDescending: sortDescending,
}
