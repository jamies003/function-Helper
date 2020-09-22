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
  console.log(arr)
  return swapIdx;
}

pivot ([4,8,2,1,5,7,6,3])