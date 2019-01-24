// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  if (n===0) return '';
  if (n===1) return '#';

  let blanks = '';
  let filled = '#';
 
  for(let i = 0;i<n-1;i++){
    blanks += ' ';
  }
  
  while (!(n<1)) {
    console.log(blanks + filled + blanks);
    blanks = blanks.slice(0, -1);
    filled += '##'; 
    n--;
  }
  return true
}

console.log(pyramid(5));

module.exports = pyramid;
