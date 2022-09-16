function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(77));

let num = 1;
var counter = 0;
while (counter < 15) {
  if (num % 3 == 0 && num % 5 != 0) console.log("Fizz");
  else if (num % 3 != 0 && num % 5 == 0) console.log("Buzz");
  else console.log(num);
  counter += 1;
  num += 1;
}
