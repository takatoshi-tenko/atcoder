function Main(input) {
  const args = input.split('\n')
  const num = args[0].split(' ').map(Number)
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  if (num[0] + 1 === num[1] || num[0] - 1 === num[1]) {
    console.log('Yes')
  } else if (num[0] === array[0] && num[1] === array[9]) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
console.log(Main('1 10'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));