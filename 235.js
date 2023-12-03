function Main(input) {
  const args = input.split('\n')
  const num = args[0].split('').map(Number)
  const A = [num[0], num[1], num[2]].join('')
  const B = [num[1], num[2], num[0]].join('')
  const C = [num[2], num[0], num[1]].join('')
  const result = Number(A) + Number(B) + Number(C)
  console.log(result)
}
console.log(Main('123'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));