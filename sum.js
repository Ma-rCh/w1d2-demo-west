// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments
const args = process.argv.slice(2);
// console.log("args:", args);
// edge case: We need at least 2 arguments. if not output an error message
if (args.length < 2) {
  console.log('please enter at least 2 command-line arguments');
  // return or process.exit();
  process.exit();
}

// create an accumulator
let total = 0;

// map => loop + transformation to each element in the array

for (let num of args) {
  const nb = Number(num);
  // edge case: If any argument is not a whole number, skip it.
  // edge case: If any argument is not a number, output an error message.
  if (isNaN(nb)) {
    console.log('Please enter only numbers');
    // return or process.exit();
    process.exit();
  }

  if (Number.isInteger(nb)) {
    // add them up
    // total <= total + num;
    total += nb;
    console.log('nb:', nb, 'type:', typeof nb, 'total:', total);
  }
}

console.log('Total:', total);
