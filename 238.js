function Main(input) {
  let A = 2 ** input
  let B = input ** 2
  if (A > B) {
    console.log(('Yes'))
  } else {
    console.log(('No'))
  }
}
console.log(Main('623947744'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));