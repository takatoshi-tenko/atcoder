function Main(input) {
  const args = input.trim().split('\n')
  const num = args[0].split(' ')
  let minutes = 1
  let hour = minutes * 60
  const takahashi = num[0] * hour + num[1] * minutes
  const aoki = num[2] * hour + num[3] * minutes
  if (takahashi > aoki) {
    console.log('Aoki')
  } else if (takahashi < aoki) {
    console.log('Takahashi')
  } else {
    console.log('Takahashi')
  }
}
console.log(Main('0 0 23 59'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));