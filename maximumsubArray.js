// Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest sum and return its sum.
// Time complexity of 0(n)

function maximumSubArray(nums) {

    let subArraySum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + [nums[i] - 1], nums[i])
    }
    console.log(subArraySum)
    return Math.max(...nums);
}
maximumSubArray([-1,0,2]);