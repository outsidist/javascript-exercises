const add = function(arg1,arg2) {
	let added = arg1+arg2;
  return added;
};

const subtract = function(arg1,arg2) {
  let subtracted = arg1-arg2;
	return subtracted;
};

const sum = function(args) {
	let summed = 0
  for (let i = 0; i<args.length; i++){
    summed += args[i];
  }
  return summed;
};

const multiply = function(args) {
  let multiplied = args[0];
  for (let i = 1; i < args.length; i++){
    multiplied *= args[i];
  }
  return multiplied;
};

const power = function(base, exponent) {
	let powered = base ** exponent;
  return powered;
};

const factorial = function(arg) {
  if (arg === 0 || arg === 1) {
    return 1;
  } else {
	let factorialOutput = arg;
  for (let i = arg-1; i > 0; i--){
    factorialOutput *= i;
  }
  return factorialOutput;
  }
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
