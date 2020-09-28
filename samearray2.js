// Same Array Algorithm
// Both arrays have to be the same size or it will return false 


function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // it's faster to acess data inside of a object
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  // console.log(frequencyCounter2)
  // console.log(frequencyCounter1)

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  console.log(frequencyCounter2)
  console.log(frequencyCounter1)
  return true;  
}
same([1,2,3,2,5],[9,4,1,4,15])
// this returns false because 15 is not the square root of 5