function calculateFactorial(n) {
  if (n === 0) return 1;
  if (n < 0 || typeof n !== "number")
    throw new Error("input must be number and greater than zero");

  let result = 1;
  let i = n;
  // for(let i=1;i<=n;i++){
  //         result *=i

  // }

  // while (i > 0) {
  //   result = result * i;
  //   i--;
  // }
  do {
    result *= i;
    i--;
  } while (i > 0);

  return result;
}

//1*2*3

console.log(calculateFactorial(0));
console.log(calculateFactorial(3));
console.log(calculateFactorial(5));
console.log(calculateFactorial(20));
//console.log(calculateFactorial("e"));

//recursive version

// function recursiveFactorial(n) {
//   if (n === 0) return 1;
//   if (n < 0 || typeof n !== "number")
//     throw new Error("input must be number and greter than zero");

//   return n * recursiveFactorial(n - 1);
// }

// console.log(recursiveFactorial(5));
