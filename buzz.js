let result = "";
for (counter = 0; counter < 7; counter += 1) {
  result += "#";
  console.log(result, "\n");
}

let num = 1;
var counter = 0;
while (counter < 25) {
  if (num % 3 == 0 && num % 5 != 0) console.log("Fizz");
  else if (num % 3 != 0 && num % 5 == 0) console.log("Buzz");
  else console.log(num);
  counter += 1;
  num += 1;
}
