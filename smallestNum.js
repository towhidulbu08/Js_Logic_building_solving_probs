function checkSmallestNum(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number")
    return a < b && a < c ? a : b < a && b < c ? b : c < a && c < b ? c : a;
  else {
    return "invalid input";
  }

  
}

// console.log(checkSmallestNum(3, 1, 6));
// console.log(checkSmallestNum(-1, -6, 9));
// console.log(checkSmallestNum(1, 2, 1));
// console.log(checkSmallestNum(-1, -1, -1));
// console.log(checkSmallestNum("s", 3, 4));




function anotherWay(a,b,c){

  let smallestNumber=a

  if (b<smallestNumber){
    smallestNumber=b
  }
  if(c<smallestNumber){
     smallestNumber=c
  }

  return smallestNumber
}


// console.log(checkSmallestNum(3, 1, 6));
// console.log(checkSmallestNum(-1, -6, 9));
// console.log(checkSmallestNum(1, 2, 1));
// console.log(checkSmallestNum(-1, -1, -1));


function sort(...args){

  let smallest=args.sort((a,b)=>b-a)

  return smallest[0]
}


console.log(sort(1,3,4,5,6));
console.log(sort(3,3,-4,1,-6));
console.log(sort(1,2,4,4,-12));