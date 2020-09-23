// Es2015 Version

// Pivot function using to determine the pivot point 
function pivot(arr, start = 0, end = arr.length -1) {
  let swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  // assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i)
      // console.log(arr)
    }
  }

  // Swaps the pivot from the start to the swapPoint
  swap(arr, start, swapIdx)
  console.log(arr)
  return swapIdx;
}
pivot([4,8,2,1,5,7,6,3]);
// swapIdx should be 3