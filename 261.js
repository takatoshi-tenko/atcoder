function Main(input) {
  const arg = input.trim().split('\n')
  // const answer = 0
  const num = arg[0].split(' ')
  const redPoint = num[1] - num[0]
  const bluePoint = num[3] - num[2]
  const firstRed = num[0]
  const firstBlue = num[0]
  redLength = []
  for (let i = 0; i < redPoint; i++) {
    redLength += firstRed
  }
}

console.log(Main('0 3 1 5'))