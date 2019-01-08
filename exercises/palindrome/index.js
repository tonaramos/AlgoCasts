// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false




//  -- Third Solution  --           
// function palindrome(str) {                      // this solution does double the work since only the first half of items need to be compared
//   return str.split('').every((char, i) => {     // no need to compare the last half of the characters
//     return char === str[str.length - 1 - i];
//   })
// }


// -- Second Solution --
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }


//  -- First Solution  --
function palindrome(str) {
  let reverseIndex = str.length - 1;
  let output = true;
  str.split('').map(item => {
    if (item !== str[reverseIndex]) {
      output = false;
    }
    // console.log('item -> ', item, ' === ', str[reverseIndex], ' ???');
    reverseIndex -= 1; 
  })
  return output;
}
// console.log(palindrome('abgh'));
// console.log(palindrome('uytyu'));


module.exports = palindrome;
