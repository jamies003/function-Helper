function countChar (str) {
  let result = {};

  for (let char of str) {
    if(isAlphanumeric(char)){
        char = char.toLowerCase();
      result[char] = ++result[char] || 1;

    }
  }
//   console.log(result);
  return result;

function isAlphanumeric(char) {
  let code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha(A-Z)
        !(code > 96 && code < 123)){ // lower alpha(a-z)
          return false;
  }
  console.log(result); 
  return true;
}
}
countChar("Check the status!")
// isAlphanumeric("text");

