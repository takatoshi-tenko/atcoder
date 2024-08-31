// const Main = (input) => {
// // 小数点以下の部分について、末尾に 0 を付けない
// // 末尾に過剰な小数点を付けない
// const num = input.split('.')
// const numArray = num[1].split('')
// console.log(num)
// console.log(numArray)
// while(true) {
//   // 最後の要素が0の時は削除
//   if (numArray[numArray.length-1] === '0') {
//     numArray.pop()
//   } else {
//     break
//   }
// }
// if (numArray.length) {
//   console.log(num[0] + '.' + numArray.join(''))
// } else {
//   console.log('0')
// }
// }

function formatNumber(X) {
  // 文字列としてXをトリムし、小数点以下の末尾の0を削除
  let formattedX = parseFloat(X).toString();
  console.log(parseFloat(X))
  console.log(formattedX);
}



console.log(formatNumber('0.000'))

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))