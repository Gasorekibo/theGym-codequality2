const calculateAverage = (numbers) => {
  const sumOfNumbers = numbers.reduce((sum, curr) => sum + curr, 0);
  return sumOfNumbers / numbers.length;
};