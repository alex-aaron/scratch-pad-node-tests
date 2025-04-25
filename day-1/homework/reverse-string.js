/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
  // YOUR CODE GOES BELOW HERE //
  let output = "";
  for (let i = input.length - 1; i >= 0; i--){
    output += input[i];
  }
  return output;
  // YOUR CODE GOES ABOVE HERE //
}

// DO NOT REMOVE //
module.exports = {
  reverseString: reverseString,
}