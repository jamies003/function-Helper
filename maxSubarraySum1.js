// Write a function cslled maxSubArray which accepts an array on integers and a number called N. The functiomn should claculate the maximum sum of N consecutive elements in the array
// Use Sliding Window concept
// Time complexity -O(N)

function maxSubArraySum(arr, num) {

  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    // also could use the if statement. if (tempSum > maxSum){ maxSum = tempSum;}
    console.log(tempSum, maxSum);
  }
  console.log(maxSum);
  return maxSum
}
maxSubArraySum([5,3,7,4,8,2,9,4,11,2,4],3)
