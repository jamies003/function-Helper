// Given a Sorted array of integers, write a function called search, that accpets a value and returnsthe index where the value passed to the function is located. if the value is not found, return -1
// the array has to be sorted for this to work
// This process uses Binary Search which has a time complexity of Log(N)

function search(array, val) {

  let min = 0;
  let max = array.length -1;

  while(min <= max) {

    let middle = Math.floor((min + max) /2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle +1;
    }
    else if (array[middle] > val) {
      max = middle -1;
    }
    else {
      return middle;
    }
    console.log(middle)
  }
  return -1;
}
search([1,2,3,4,5,6],4)