function Main(input) {
  const args = input.trim().split('\n')
  const pointOne = args[0].split(' ')
  const pointTwo = args[1].split(' ')
  const pointThree = args[2].split(' ')
  const xPoint = [pointOne[0], pointTwo[0],pointThree[0]]
  const yPoint = [pointOne[1], pointTwo[1],pointThree[1]]
  console.log(xPoint)
  console.log(yPoint)
  const result = [0, 0]
  if (xPoint[0] === xPoint[1]) {
    result[0] = xPoint[2]
  } else if (xPoint[0] === xPoint[2]) {
    result[0] = xPoint[1]
  } else if (xPoint[1] === xPoint[2]) {
    result[0] = xPoint[0]
  }

  if (yPoint[0] === yPoint[1]) {
    result[1] = yPoint[2]
  } else if (yPoint[0] === yPoint[2]) {
    result[1] = yPoint[1]
  } else if (yPoint[1] === yPoint[2]){
    result[1] = yPoint[0]
  }
  console.log(result.join(' '))
}
console.log(Main(`
-60 -40
-60 -80
-20 -80
`))