// Write a funciton which takes in a string and returns counts of each in the string.

function countChar(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
   if (result[char] > 0){
     result[char]++;
    //  console.log(char)

   }else{
     result[char] = 1;
   };
  }
  console.log(result);
  return result;
}
countChar("Checking The Status");