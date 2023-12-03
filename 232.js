function Main(input) {
  input = input.split('\n')
  const unit = input[0].split('')
  const result = unit[0] * unit[2]
  console.log(result)
}
console.log(Main('3x7'))

Main(require('fs').readFileSync('dev/stdin', 'utf-8'))