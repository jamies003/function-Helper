// Given two strings, write a function to determine if the second string is an anagram of the first using Cinema/IceMan

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counterString = {};

  for (let i = 0; i < str1.length; i++) {
    // letter = str1[i].toLowerCase();
    // if letter exists, increment, otherwise set to 1
    counterString[str1[i]] ? counterString[str1[i]] += 1 : counterString[str1[i]] = 1;
  }
  console.log(counterString + '*******')

  for (let i = 0; i < str2.length; i++) {
    // letter = str2[i].toLowerCase();
    // if you cant find letter, or letter is zero then its not an anagram
    if (!counterString[str2[i]]) {
      return false;
    }else{
      counterString[str2[i]] -=1;
    }
  }
  // console.log(str1 + counterString)
  // console.log(str2)
  return true;
}
anagram("Cinema", "Iceman")