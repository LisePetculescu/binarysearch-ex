/*
search = What you're looking for (number or string).
values = Where you're looking (the sorted array).
comparator = How you’re looking for it, the searching logic.
*/
export default function binarySearch(search, values, comparator) {
  let min = 0;
  let max = values.length - 1;
  let middle;
  let iterations = 0;

  /* 
  Checks if a comparator functions is given, 
  then checks if it is a number search or a word search
  */
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a - b;
      } else if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b);
      }
      return 0;
    };
  }

  // if no comparator logic is given we use:
  while (min <= max) {
    middle = Math.floor((min + max) / 2);
    iterations++;

    const comparison = comparator(values[middle], search);

    if (comparison === 0) {
      console.log(`Iterations: ${iterations}`);
      return middle;
    } else if (comparison > 0) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  // counting how many tries it takes to find what we're looking for in the sorted array
  console.log(`Iterations: ${iterations}`);

  // returns -1 if the search values isn't found in the array
  return -1;
}
