const addBorder = (str: String[]): any => {
  const wall: any = "*".repeat(str.length + 2);
  const paddedStr = str.map(val => {
    return ["*", ...val, "*"];
  });
  return [wall, ...paddedStr, wall];
};

console.log(addBorder(["A", "B", "C", "D", "E"]));
