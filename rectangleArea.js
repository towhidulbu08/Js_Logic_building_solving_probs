function rectArea(l, w) {
  if (l <= 0 || w <= 0)
    throw new RangeError("Length and Width must be a Positive Number");
  let area = l * w;
  console.log(area);
}

rectArea(3, 6);
// rectArea(-3, 4);
// rectArea(3, -4);
// rectArea(-3, -4);
rectArea(30, 50);
