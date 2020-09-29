function add(num1 , num2) {
  return num1 + num2;

}
function multiply(num1, num2) {
  return num1 * num2;
  
}
function cal(num1, num2, operator) {
  console.log(num2 + num1)
  // console.log(num1 * num2)
  return operator(num1, num2);
  
}
cal(4,5, add);