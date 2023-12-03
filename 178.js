function Main(input) {
  const args = input.trim().split('\n')
  const [a, b, c, d] = args[0].split(' ').map(BigInt)
  let result = a * c
  if (result < a * d) result = a * d
  if (result < b * c) result = b * c
  if (result < b * d) result = b * d
  // console.log(result)
  console.log(result.toString())
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(Main('1 10 8 -2'))