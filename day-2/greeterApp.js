/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that returns a greeting string depending
 * on the hour.
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

function greeterApp(hour){
  if (hour <= 11){
    return 'Good Morning!'
  } else if (hour <= 16){
    return 'Good Afternoon!'
  } else if (hour <= 21){
    return 'Good Evening!'
  } else {
    return 'Good Night!';
  }
}


// DO NOT REMOVE //
module.exports = {
  greeterApp: greeterApp,
}