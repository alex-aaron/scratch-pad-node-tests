/**
 * IN CLASS EXERCISE: LOOPS
 * 
 * NOTE: All solutions must use loops and not methods that loop.
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  const output = [];
  for (let key in object){
    output.push(key);
  }
  // YOUR CODE ABOVE HERE //
  return output;
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (let key in object){
    console.log(key);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  const output = [];
  // YOUR CODE BELOW HERE //
  for (let key in object){
    output.push(object[key]);
  }
  return output;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (let key in object){
    console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  const output = [];
  for (let key in object){
    output.push(key);
  }
  return output.length;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  const output = [];
  for (let key in object){
    output.push(object[key]);
  }

  for (let i = output.length - 1; i >= 0; i--){
    console.log(output[i]);
  }
  // YOUR CODE ABOVE HERE //
}

// DO NOT REMOVE //
module.exports = {
  printArrayValues: printArrayValues,
  printArrayValuesInReverse: printArrayValuesInReverse,
  getObjectKeys: getObjectKeys,
  printObjectKeys: printObjectKeys,
  getObjectValues: getObjectValues,
  printObjectValues: printObjectValues,
  printObjectValuesInReverse: printObjectValuesInReverse,
  getObjectLength: getObjectLength,
}