// function Main(input) {
//   const row = input.split('\n')
//   const sumNum = row[1].split(' ')
//   // console.log(sumNum)
//   let result = 0
//   for (let i = 0; i<sumNum.length; i++) {
//     result += parseInt(sumNum[i], 10)
//   }
//   console.log(result)
// }

// // console.log(Main(('3\n2 7 2')))
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

// B問題

// M個の都市を配列に追加 A
// 2行目以降の配列を追加 B
// 0~M個の初期数0の配列を用意 C
// そこにBで出てきた数字に該当するindexに足し算していく
// 一を含んでる要素を取得、その中の2つ目の数字の低い順に並べる　例）1 3, 1 2, 1 6の場合　2 3 6にする
// 同様の操作をM回行う
// 終わってできた配列をCの要素ごとに結合

// 流れ
// N個の都市分の配列を持つ配列を用意→連想配列
// そこのindexがそれぞれの都市の番号とする
// 各都市(index)に他の都市が紐づいてるのでそれを都市の配列内に数字として格納していく
// 配列に入った数字の長さが、その都市が紐づいてる数に等しくなる
// それを1列目に数字として出力、2列目に、紐づいてる数字をソートして出力


function Main(input) {
  const args = input.trim().split('\n')
  const [N, M] = args[0].split(' ').map(Number)
  const array = Array.from(Array(N), () => [])
  // console.log(array)
  for (let i = 1; i <= M; i++) {
    const arrayInArray = args[i].split(' ').map(Number)
    array[arrayInArray[0]-1].push(arrayInArray[1])
    array[arrayInArray[1]-1].push(arrayInArray[0])
  }
  array.forEach(val => {
    console.log(val.length, val.sort((a, b) => a - b).join(' '))
  })
  // const city = args.slice(1)
  // let cityUnit = []
  // let cityPoint = []
  // let unitCount = {}
  // for (let i = 0; i < M; i++) {
  //   cityPoint.push(i)
  // }
  // cityPoint.fill(0)
  // for (let i = 0; i < city.length; i++) {
  //   cityUnit += city[i].split(' ')
  // }
  // cityUnit = [...cityUnit]
  // cityUnit.forEach((val) => {
  //   unitCount[val] = (unitCount[val] || 0) +1
  // })
  // // if (cityPoint[0] === Object.keys(unitCount[0])) {
  // // console.log('Yes')
  // // }
  // console.log(Object.keys(unitCount)[0])
  // console.log(city)
  // console.log(cityUnit)
  // console.log(cityPoint)
  // console.log(unitCount)
  // console.log(a)
}
console.log(Main(`
6 6
3 6
1 3
5 6
2 5
1 2
1 6
`))

// const fs = require('fs');
// const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// input = `
// 6 6
// 3 6
// 1 3
// 5 6
// 2 5
// 1 2
// 1 6
// `
// const inputs = input.trim().split('\n');
 
// const [N, M] = inputs[0].split(' ').map(Number);
 
// const arrs = Array.from(Array(N), () => []);
// console.log(arrs)
 
// for (let i = 1; i <= M; i++) {
//   const arr = inputs[i].split(' ').map(Number);
//   console.log(arr)
//   console.log(arrs[arr[0] - 1].push(arr[1]))
//   console.log(arrs[arr[1] - 1].push(arr[0]))
// }
// console.log(arrs)
 
// arrs.forEach(arr => {
//   console.log(arr.length, arr.sort((a, b) => a - b).join(' '));
// });

// a = 'oooooaa'
// b = Array.from('oooooaa')
// console.log(b)