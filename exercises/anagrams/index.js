// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// -- Third Solution

const anagrams = (stringA, stringB) => {
  let str1 = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  let str2 = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  return str1 === str2;
}

// -- second solution 

// function anagrams(stringA, stringB) {
//   let str1 = stringA.replace(/[^\w]/g, '').toLowerCase().split('');
//   let str2 = stringB.replace(/[^\w]/g, '').toLowerCase().split('');
//   let obj1 = {};
//   str1.map((item) => {
//     obj1[item] = obj1[item] + 1 || 1;
//   })
//   str2.map((item) => {
//     obj1[item] ? obj1[item]-- : obj1[item] = -1;
//   })
//   return Object.values(obj1).every(item => item === 0);
// }



// -- first solution --
// function anagrams(stringA, stringB) {
//   let str1 = stringA.replace(/[^\w]/g, '').toLowerCase().split('');
//   let str2 = stringB.replace(/[^\w]/g, '').toLowerCase().split('');
//   let obj1 = {};
//   let obj2 = {};
//   str1.map((item, index) => {
//     if (obj1[item]) {
//       obj1[item]++;
//     } else {
//       obj1[item] = 1;
//     }
//   })
//   str2.map((item, index) => {
//     if (obj2[item]) {
//       obj2[item]++;
//     } else {
//       obj2[item] = 1;
//     }
//   })
//   let output = true;
//   Object.keys(obj2).map(key => {
//     if (obj1[key] !== obj2[key]) {
//       output = false;
//     }
//   })
//   return output;
// }
module.exports = anagrams;
