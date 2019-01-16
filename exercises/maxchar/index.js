// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// -- Second solution --

// function maxChar(str) {
//   let storage = {};
//   let max = 0;
//   let maxChar = '';
//   for (let i = 0; i < str.length; i++) {
//     if ( storage[str[i]]) {
//       storage[str[i]]++;
//       // if (storage[str[i]] > output[1]) {
//         // output = [str[i], storage[str[i]]];
//       // }
//     } else {
//       storage[str[i]] = 1;
//       // if (output === null) {
//         // output = [str[i], storage[str[i]]];
//       // }
//     }
//   }
//   for (let char in storage) {
//     if (storage[char] > max) {
//       max = storage[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

// -- First solution --

function maxChar(str) {
  let storage = {};
  let output = null;
  for (let i = 0; i < str.length; i++) {
    if ( storage[str[i]]) {
      storage[str[i]]++;
      if (storage[str[i]] > output[1]) {
        output = [str[i], storage[str[i]]];
      }
    } else {
      storage[str[i]] = 1;
      if (output === null) {
        output = [str[i], storage[str[i]]];
      }
    }
  }
  return output[0];
}

module.exports = maxChar;
