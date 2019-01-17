// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//  -- Second Solution --
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}


//  -- First Solution --
// function chunk(array, size) {
//   let count = 0;
//   let output = [];
//   let tempArr = [];
//   for (let i=0; i<array.length; i++) {
//     tempArr.push(array[i]);
//     count++;
//     if (count%size === 0 || i === array.length-1) {
//       output.push(tempArr);
//       tempArr = [];
//     }
//   }
//   return output;
// }

module.exports = chunk;
