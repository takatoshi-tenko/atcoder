function Main(input) {
  const args = input.split('\n')
  const bridgeHeight = args[1].split(' ')
  const maxNums = Math.max.apply(null, bridgeHeight) //80
  const result = bridgeHeight.indexOf(maxNums)
  const result2 = bridgeHeight.indexOf(maxNums.toString()) + 1
  // console.log(maxNums)
  // console.log(result)
  // console.log(bridgeHeight)
  console.log(result2)
  // console.log(Math.max.apply(null, bridgeHeight))
}

console.log(Main('10\n22 75 26 45 72 81 47 29 97 2'))
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

// const nums = [123, -10, 1024, -1, 7880, -321, 0, 5]
// maxNum = Math.max.apply(null, nums)
// console.log(maxNum)