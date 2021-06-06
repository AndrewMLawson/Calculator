let buttons = document.querySelectorAll(".button");
console.log(buttons);

let display = "";
let evaluator = {}




//Math Functions

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numList) {
  let sum = 0;
  for (let i = 0; i < numList.length; i++){
    sum += numList[i];
  }
  return sum;
};

const multiply = function(numList) {
  let product = numList[0];
  for (let i = 1; i < numList.length; i++){
    product *= numList[i];
  }
  return product;
};

const power = function(num, power) {
  let product = num;
  for (let i = 1; i < power; i++){
    product *= num
  }
  return product;
};

const factorial = function(fact) {
  if (fact === 0) {
    return 1;
  }
  let product = fact;
  for (let i = fact -1; i > 0; i--){
    product *= i;
  }
  return product;
};


