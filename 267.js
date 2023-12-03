// 曜日の配列を用意
// 月曜なら5日後、火曜なら4日後、水曜なら3日後、木曜なら2日後、金曜なら1日後となる式を作る
// 結果を出力

// function Main(input) {
//   const dayOfWeek = input.trim().split(' ')[0]
//   if (dayOfWeek === 'Monday') {
//     console.log(5)
//   }
//   if (dayOfWeek === 'Tuesday') {
//     console.log(4)
//   }
//   if (dayOfWeek === 'Wednesday') {
//     console.log(3)
//   }
//   if (dayOfWeek === 'Thursday') {
//     console.log(2)
//   }
//   if (dayOfWeek === 'Friday') {
//     console.log(1)
//   }
// }
// console.log(Main('Monday'))
// console.log(Main('Tuesday'))
// console.log(Main('Wednesday'))
// console.log(Main('Thursday'))
// console.log(Main('Friday'))
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// B問題
// 方針
// スプリットのパターンを洗い出す
// ピン1は必ず0の必要がある
// それぞれで場合わけする
// 4が倒れてる時
//   7が立ってるかつ、1以外のどれかが立ってる
// 2と8が倒れてる時
//   4か7が立ってるかつ、1以外のどれかが立ってる
// 1と5が倒れてる時
//   2,4,7,8のどれかが立ってるかつ、3,6,9,10のどれかが立ってる
// 3と9が倒れてる時
//   6か10が倒れてるかつ、1以外のどれかが倒れてる
// 6が倒れてる時
//   10が倒れてるかつ、1以外のどれかが倒れてる


function Main(input) {
  const args = input.split('\n')
  let num = args[0].split('').map(Number)
  if (num[0] === 1) {
    console.log(('No'))
    return
  }

  pin7 = num[6]
  // ---
  pin4 = num[3]
  // ---
  pin2 = num[1]
  pin8 = num[7]
  // ---
  pin1 = num[0]
  pin5 = num[4]
  // ---
  pin3 = num[2]
  pin9 = num[8]
  // ---
  pin6 = num[5]
  // ---
  pin10 = num[9]

  a = [pin5, pin3, pin9, pin6, pin10]
  b = [pin7, pin4, pin2, pin8]
  c = [pin3, pin9, pin6, pin10]
  d = [pin7, pin4, pin2, pin8, pin5]
  e = [pin6, pin10]
  f = [pin7, pin4, pin2, pin8, pin5, pin3, pin9]
  g = [pin2, pin8, pin5, pin3, pin9, pin6, pin10]
  h = [pin4, pin7]

  if (pin4 === 0) {
    if (pin7 === 1 && g.includes(1)) {
      console.log('Yes')
      return
    }
  }
  if (pin2 === 0 && pin8 === 0) {
    if (h.includes(1) && a.includes(1)) {
      console.log(('Yes'))
      return
    }
  }
  if (pin5 === 0) {
    if (b.includes(1) && c.includes(1)) {
      console.log('Yes')
      return
    }
  }
  if (pin3 === 0 && pin9 === 0) {
    if (d.includes(1) && e.includes(1)) {
      console.log('Yes')
      return
    }
  }
  if (pin6 === 0) {
    if (pin10 === 1 && f.includes(1)) {
      console.log('Yes')
      return
    }
  }
  console.log('No')
}

console.log(Main('1101110101'))







