function reverseString(str) {
  let reverse = str.split("").reverse().join("");
  return reverse;
}

console.log(reverseString("software Development"));

function sol2(str) {
  if (typeof str !== "string") {
    throw new Error("invalid input");
  }

  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

console.log(sol2(3));
console.log(sol2("software Development"));
console.log(sol2("Taamim"));
