const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];
const number = 28;
let index = binarySearch(number, values);
console.log(`Fundet tallet ${number} på index: ${index}`);

function binarySearch(search, values) {
  // klar til kode!
  let min = 0;
  let max = values.length - 1;
  let middle = Math.floor((max + min) / 2);
  let found = false;
  console.log(`min: ${min} and max: ${max}`);
  console.log(`middle: ${middle}`);

  while (min <= max && !found) {
    middle = Math.floor((min + max) / 2);
    console.log(`min: ${min}, max: ${max}, middle: ${middle}`);

    const comparison = compare(values[middle], search);

    if (comparison > 0) {
      max = middle - 1;
    } else if (comparison < 0) {
      min = middle + 1;
    } else if (comparison == 0) {
      found = true;
      return middle;
    }
  }

  return -1;
}

function compare(value1, value2) {
  return value1 - value2;
}
