const addNParams = (...args: any[]): any => {
  return args.reduce((sum, val) => {
    return sum + val;
  }, 0);
};
console.log(addNParams(1, 2, 3, 4, 5, 6));
