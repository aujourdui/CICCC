//a)
const mySum = (...numbers) => {
  let sum = 0;

  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

module.exports = mySum;
