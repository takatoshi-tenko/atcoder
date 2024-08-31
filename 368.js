// const Main = (input) => {
//   const args = input.trim().split('\n')
//   const array = args[1].split(' ').map(Number)
//   let isActive = true
//   let count = 0
//   let resultArray = array
//   while(isActive) {
//     resultArray = differenceArray(sortArray(resultArray))
//     console.log(resultArray)
//     if (resultArray.filter(n => n > 0).length === 1) {
//       isActive = false
//     }
//     count++
//   }

//   console.log(count)
// }

// const differenceArray = (array) => {
//   const result = []
//   array.map((a, i) => {
//     if (i === 0 || i === 1) {
//       result.push(array[i]-1)
//     } else {
//       result.push(array[i])
//     }
//   })
//   return result
// }

// const sortArray = (array) => {
//   return array.sort((a, b) => b - a)
// }

function countOperations(input) {
  const args = input.trim().split('\n')
  const array = args[1].split(' ').map(Number)
  let operations = 0;

  while (true) {
      // 配列を降順にソート
      array.sort((a, b) => b - a);

      // 正の要素の個数を数える
      const positiveCount = array.filter(x => x > 0).length;

      // 正の要素の個数が1つ以下なら操作終了
      if (positiveCount <= 1) {
          break;
      }

      // A[0], A[1] を 1 減らす
      array[0]--;
      array[1]--;
      operations++;
  }

  return operations;
}

console.log(countOperations(`
5
1 1 100 5 7
`))

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))