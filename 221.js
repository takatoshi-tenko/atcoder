function Main(input) {
  const [S, T] = input.trim().split('\n')
  if (S === T) { return 'Yes'}
  const splitS = S.split('')
  const splitT = T.split('')
  let result = []
  for (let i = 1; i < splitS.length; i++) {
    // if (i === 0) { i = 1 }
    result = splitS.splice(i-1, 2, splitS[i], splitS[i-1])
    console.log(`ループ${i}`)
    console.log(splitS)
  }
  console.log(result)
  // console.log(splitS)
  // console.log(splitT)
}

console.log(Main(`
abc
acb
`))

// let array = [1,2,3,4,5]
// // 入れ替える要素のindex
// const index = 2;
// array.splice(index-1, 2, array[index], array[index-1]);
// console.log(array)