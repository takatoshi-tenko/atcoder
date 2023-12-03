function Main(input) {
  const args = input.trim().split('\n')
  const SNumber = args[0].split('')
  const [a, b] = args[1].split(' ').map(Number)
  Aresult = SNumber.slice(a-1, a)
  Bresult = SNumber.slice(b-1, b)

  SNumber.splice(a-1, 1, ...Bresult)
  SNumber.splice(b-1, 1, ...Aresult)
  console.log(SNumber.join(''))
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(Main(`
chokudai
3 5
`))