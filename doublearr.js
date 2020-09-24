//Create a Array in which the numbers in the Array is double

function double(arr) {

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  } 

  console.log(newArr)
  return newArr;
}
double([2,6,3])
