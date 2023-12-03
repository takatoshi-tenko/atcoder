// A問題
function Main(input) {
  const atcoder = 'atcoder'
  const args = input.split('\n')
  const L = args[0].split(' ')[0]
  const R = args[0].split(' ')[1]
  const result = atcoder.slice(L-1, R)
  console.log(result)
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
console.log(Main('1 7'))

// B問題