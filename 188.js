function Main(input) {
  const args = input.split('\n')
  const team = args[0].split(' ').map(Number)
  result = 0
  if (team[0] > team[1]) {
    result = team[1] + 3
    if (result > team[0]) {
      console.log('Yes')
    } else {
      console.log(('No'))
    }
  } else if (team[0] < team[1]) {
    result = team[0] + 3
    if (result > team[1]) {
      console.log('Yes')
    } else {
      console.log(('No'))
    }
  }
}
console.log(Main('12 15'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));