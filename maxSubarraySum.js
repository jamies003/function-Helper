// Write a function called maxSubArray which accepts an array on integers and a number called N. The functiomn should claculate the maximum sum of N consecutive elements in the array
// Use Sliding Window concept

//This solution works for a smaller array but with a huge array it would not be effecient

function maxSubArraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0;  i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max){
      max = temp;
    }
    // console.log(temp, max)
  }
  console.log(max)
  return max;
}
maxSubArraySum([2,6,9,2,1,8,5,6,3],3)

