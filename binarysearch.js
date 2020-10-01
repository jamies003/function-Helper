// Binary Search
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length;

    while(left <= right) {
        let middle = Math.floor((left + right) /2);
        if (arr[middle] === val) return middle;

        if (arr[middle] > val) right = middle -1;
        else left = middle + 1;
    }
    return -1;
}
console.log(binarySearch([5, 6, 10, 14, 18, 30, 37, 40, 44, 79, 84, 86, 98, 99], 10));