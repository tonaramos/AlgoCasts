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


//third solution 
const pyramid = (n, row = 0, level = '') => {
  if (row === n) return; //base case 

  if (level.length === (2*n) - 1) {
    console.log(level);
    return pyramid(n, row+1);
  }

  const midpoint = Math.floor(((n*2)-1)/2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#'
  } else {
    add = ' ';
  }
  // console.log(level)
  pyramid(n, row, level+add);
}

// Second solution

// const pyramid = (n) => {
//   const midpoint = Math.floor(((n*2)-1)/2);
//   for (let row=0; row<n; row++) {
//     let output = '';
//       for(let column = 0; column<((n*2)-1); column++){
//         if ((midpoint - row <= column) && (midpoint + row >= column)) {
//           output += '#';
//         } else {
//           output += ' '
//         } 
//       }
//     console.log(output)
//   }
//   return true;
// }




// First solution

// function pyramid(n) {
//   if (n===0) return '';
//   if (n===1) return '#';

//   let blanks = '';
//   let filled = '#';
 
//   for(let i = 0;i<n-1;i++){
//     blanks += ' ';
//   }
  
//   while (!(n<1)) {
//     console.log(blanks + filled + blanks);
//     blanks = blanks.slice(0, -1);
//     filled += '##'; 
//     n--;
//   }
//   return true
// }

console.log(pyramid(5));

module.exports = pyramid;
