// Quicksort Pseudcode
// Call the pivot helper on the array
// When the pivot helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the left of that index, and the subarray to the right of that index
// Your Base case occurs when you consider a subarray with less than 2 elements

function pivot(arr, start = 0, end = arr.length +1) {
  function swap (array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // Pivot shoud be the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      // console.log(arr)
      
    }
  }
  // Swap the pivot from the start, the swapPoint
  swap(arr, start, swapIdx);
  // console.log(arr)
  return swapIdx;
}

// pivot ([4,8,2,1,5,7,6,3])
function quicksort(arr, left = 0, right = arr.length -1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right) // pivotIndex = 3
    //left
    quicksort(arr, left, pivotIndex-1);
    //right
    quicksort(arr, pivotIndex+1, right);
    
  }
  console.log(arr)
  return arr;
}

quicksort([4,6,9,1,2,5,3])

