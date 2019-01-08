// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//  --  Second solution --
function reverseInt(n) {
  const reverse = n.toString().split('').reverse().join('');
  return parseInt(reverse) * Math.sign(n);
}



//  -- First solution --
// function reverseInt(n) {
//   const str = n.toString();
  
//   if (str[0] == '-') {
//     let output = '';
//     for (let i = str.length -1; i > 0; i--) {
//       output += str[i];
//     }
//     output = '-' + output;
//     return parseInt(output);
//   }
 
//   return parseInt(str.split('').reverse().join('')); 
// }

// console.log(reverseInt(-51));
// console.log(reverseInt(987));

module.exports = reverseInt;
