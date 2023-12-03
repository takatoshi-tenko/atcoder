function Main(input) {
  let plusN = (2) ** 31
  let minusN = (-2) ** 31
  if (input >= minusN && input < plusN) {
    console.log(('Yes'))
  } else {
    console.log(('No'))
  }
}
console.log(Main('483597848400000'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));