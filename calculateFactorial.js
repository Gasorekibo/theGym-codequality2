const returnFactorialOfNumber = (number) =>
  number <= 1 ? 1 : number * returnFactorialOfNumber(number - 1);
