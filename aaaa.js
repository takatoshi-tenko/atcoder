function Main(input) {
  args = input.split('\n')
  num1 = parseInt(args[0].split(' ')[0], 10)
  num1Result = num1 % 10
  num2 = parseInt(args[0].split(' ')[1], 10)
  num2Result = num1 % 10
  if (num1Result > num2Result) {
    console.log(num2)
  } else {
    console.log(num1)
  }
}
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(Main('17 51'))