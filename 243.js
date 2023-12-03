function Main(input) {
  const args = input.split('\n')
  const num = args[0].split(' ').map(Number)
  // console.log(num)
  let V = num[0]
  // console.log(V)
  while (V >= 0) {
    V -= num[1]
    if (V < 0) {
      console.log('F')
      break
    }
    V -= num[2]
    if (V < 0) {
      console.log('M')
      break
    }
    V -= num[3]
    if (V < 0) {
      console.log('T')
      break
    }
  }
}

console.log(Main('30 10 10 10'))