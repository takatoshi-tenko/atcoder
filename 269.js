// A問題

function Main(input) {
  const args = input.trim().split('\n')
  const a = parseInt(args[0].split(' ')[0], 10)
  const b = parseInt(args[0].split(' ')[1], 10)
  const c = parseInt(args[0].split(' ')[2], 10)
  const d = parseInt(args[0].split(' ')[3], 10)

  const resultCalculation = parseInt(( a + b ) * ( c - d ))
  console.log(resultCalculation)
  console.log('Takahashi')
}
console.log(Main('100 100 100 100'))
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// やること
// 数字の行を2行分出力
// 1行に空白開けて2つの数字を入力
// 10×10の記号の集合を用意「.」と「#」で構成されてる
//   10個の文字列を1行として、10回ループ処理　例題の場合4列目から9列目に#を出力
//     10個の文字列は.か#が出力される、これをループさせる　例題の場合「5行目から8行目に#を出力」という指令
// function Main(input) {
//   const row = input.trim().split('\n')
//   const column = row.map(e => e.split('')) //「.」を取得
//   const a = column.indexOf("#")
//   const b = column.lastIndexOf("#")

//   let flag = 0
//   let flagNumber = 0
//   // #が出た時の列番号を取得
//   for (let i = 0; i < row.length; i++) {
//     flag = row[i]
//     if (row[i].includes('#')) {
//       flag = i+1
//       flagNumber = row[i].indexOf('#') + 1
//       return flag + '\n' + flagNumber
//     }
//   }
//   console.log(flag)
//   console.log(flagNumber)
  
// }

// function Reverse(input) {
//   const row = input.trim().split('\n')
//   const column = row.map(e => e.split('')) //「.」を取得
//   // #が終わる時の列番号を取得
//   let end = 0
//   let flagEnd = 0
//   for (let i = row.length - 1; i >= 0; i--) {
//     end = row[i]
//     if (row[i].includes("#")) {
//       end = i+1
//       flagEnd = row[i].lastIndexOf('#') + 1
//       return end + '\n' + flagEnd
//     }
//   }
//   console.log(end + flagEnd)
// }
// console.log(Main(`
// ..........
// ..........
// ..........
// ..........
// ...######.
// ...######.
// ...######.
// ...######.
// ..........
// ..........
// `))

// array.forEach((value, index, array) => {
//   // 実行したい処理
// });
// 最大3つの引数を持てる
// - value(要素の値)
// - index(要素のインデックス番号)
// - array(処理してる配列)

// - forEach returnがない。書くとundefinedになる
// - map 繰り返し処理を行い新しい配列を作る。実行結果が配列として返る。のでreturn を書ける
// - filter 条件に一致する要素を検索して新しい配列を作る。返り値を持てる

// const arr = [1, 2, 3, 4, 5]
// const forEachResult = arr.forEach(value => {
//   return value * 2
// })
// console.log(forEachResult)
// const mapResult = arr.map((value, index) => {
//   return value * 2
// })
// console.log(mapResult)
// const arr1 = [3, 13, 27, 30, 33];
// // mapの場合
// const mappResult = arr1.map(value => {
//   return value % 3;
// });
// console.log(mappResult); // [0, 1, 0, 0, 0]
// // filterの場合
// const filterResult = arr1.filter(value => {
//   return value % 3;
// });
// console.log(filterResult); // [13]