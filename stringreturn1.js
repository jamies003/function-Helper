// Write a funciton which takes in a string and returns counts of each in the string.

function countChar (str) {
  let result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)){
      // using Regular expression helps to find patterns
      result[char] = ++result[char] || 1;

    }
  }
  console.log(result);
  return result;
}
countChar("Result of the Outcome!")