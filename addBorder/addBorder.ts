const addBorder = (str: String[]): any => {
  const wall: any = "****";
  const paddedStr = str.map(val => {
    let newStr: String = val;
    return ["*", ...newStr, "*"];
  });
  paddedStr.push(wall);
  paddedStr.unshift(wall);
  return paddedStr;
};

console.log(addBorder(["A", "B", "C", "D", "E"]));
