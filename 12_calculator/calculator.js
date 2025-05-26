const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	  return first - second;
};

const sum = function(array) {
	return array.reduce((total, current) => 
  total + current, 0,
  );
};

const multiply = function(array) {
  return array.reduce((total, current) =>
    total * current
  );
};

const power = function(a,b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
	let product = 1;
  for (i = n; i > 0; i--){
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
