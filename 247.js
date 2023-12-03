function Main(input) {
  const args = input.split('\n')
  const human = args[0].split('').map(Number)
  humanResult = [0, 0, 0, 0]
  humanResult[0] = 0
  humanResult[1] = human[0]
  humanResult[2] = human[1]
  humanResult[3] = human[2]
  console.log(humanResult.join(''))
}

console.log(Main('1011'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));