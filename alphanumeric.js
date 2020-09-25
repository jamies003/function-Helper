function isAlphanumeric(str) {
  let result;

  for (let i = 0; i < str.length; i++) {
    result =  str.charCodeAt(0);
    if (!(result > 47 && result < 58) && // numeric (0-9)
        !(result > 64 && result < 91) && // upper alpha(A-Z)
        !(result > 96 && result < 123)){ // lower alpha(a-z)
          return false;
          // return result;
    }
    // console.log(str);
  }
  return true;
  // console.log(`${str + result+ "********"}`);
//  return result; 
}
isAlphanumeric("text");

