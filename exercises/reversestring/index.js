// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// --  First Solution --

// function reverse(str) {
//   let output = '';
//   for (let i=str.length-1; i>=0; i--) {
//     output += str[i];
//   }
//   return output;
// }

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');   
  //reduce takes two args  -first a function -second a starting argument. The reduce function runs once per character
}

/*
Other possible ways to solve this:
using the reverse function for an array like so:
return str.split('').reverse().join();
*/

module.exports = reverse;
