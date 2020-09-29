// Given a Sorted array of integers, write a function called search, that accpets a value and returnsthe index where the value passed to the function is located. if the value is not found, return -1
// the array has to be sorted for this to work
// This process used in this solution uses a Linear Search which has a time complexity of O(N)

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
    console.log(val)
  }
  return -1;  
}
search([1,2,3,4,5,6],6)