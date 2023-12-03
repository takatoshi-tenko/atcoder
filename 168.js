function Main(input) {
  const args = input.split('\n')
  const num = args[0].split('').map(Number)
  const result = num.pop()
  let hon = [2, 4, 5, 7, 9]
  let pon = [0, 1, 6, 8]
  if (hon.includes(result)) {
    console.log(('hon'))
  } else if (pon.includes(result)) {
    console.log(('pon'))
  } else {
    console.log(('bon'))
  }
}
console.log(Main('2'))