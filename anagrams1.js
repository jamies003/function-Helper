function validAnagram (first, second) {
  if (first.length !== second.length){
    return false;

  }
  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letters = first[i];
    // if letters doesnt exist, increment, otherwise set to 0
    lookup[letters] ? lookup[letters] += 1: lookup[letters] = 1;

  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letters = second[i];
    // if letters cannot be found or letters is zero then its not a anagram
    if (!lookup[letters]){
      return false;
    }else{
      lookup[letters] -= 1;
    }
  }
  return true;

}
validAnagram("anagram", "nagaram");
