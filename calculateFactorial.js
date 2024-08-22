const returnFactorialOfNumber = (number) =>
  number < 0
    ? undefined
    : number <= 1
    ? 1
    : number * returnFactorialOfNumber(number - 1);
