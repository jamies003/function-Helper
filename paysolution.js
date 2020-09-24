// Write a function that determines a random person to make a purchase

function yourPaying(names) {

  let numOfPeople =  names.length;
  let randomPersonPosition = Math.floor(Math.random() * numOfPeople);
  let randomPerson = names[randomPersonPosition];
  
  console.log(randomPerson)
  return randomPerson + " is goin to pay";
  
}
yourPaying(['manny', 'Bill', 'jenny', 'Phil'])