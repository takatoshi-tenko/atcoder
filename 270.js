// function Main(input) {
//   const args = input.split('\n')
//   const [A, B] = args[0].split(' ').map(Number)
//   const a = parseInt(A, 10).toString(2)
//   const b = parseInt(B, 10).toString(2)
//   console.log(parseInt(a|b, 2))
// }

// console.log(Main('5 3'))
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// let mySet = new Set()

// console.log(mySet.add(1))
// console.log(mySet.add(5))
// console.log(mySet.add(5))
//           // Set [ 1 ]
// // Set [ 1, 5 ]
//            // Set [ 1, 5 ]
// mySet.add('some text') // Set [ 1, 5, 'some text' ]
// let o = {a: 1, b: 2}
// mySet.add(o)
// console.log(mySet)


// B問題
// やること
// ３パターンわけて解を出力
//   ハンマーが不要な時
//   ハンマーが必要な時
//   通れない時

  // ハンマーが不要な時
  // Xが0以上の時はY > X || Y < 0
  // Xが0未満の時はY < X || Y > 0
  // 0からXまでの距離を出力

  // ハンマーが必要な時
  // Xが0以上の時はY < X && Y > Z
  // Xが0未満の時はY > X && Y < Z
  // 0からZ(-10)までの距離
  // Z(-10)からY(10)までの距離
  // Y(10)からX(20)までの距離をそれぞれ出力

  // 通れない時
  // Xが0以上の時はY < X && Y < Zであれば-1を出力
  // Xが0未満の時はY > X && Y > Z && Z > Xであれば-1を出力

// function Main(input) {
//   const args = input.split('\n')
//   let X = parseInt(args[0].split(' ')[0], 10)
//   let Y = parseInt(args[0].split(' ')[1], 10)
//   let Z = parseInt(args[0].split(' ')[2], 10)
//   let result = 0
//   // console.log(Math.abs(X))
//   // console.log(Math.abs(Y))
//   // console.log(Math.abs(Z))
//   if (X > 0) {
//     if (Y > X || Y < 0) {
//       result = Math.abs(X)
//     }
//     if (Y < X && Y > Z) {
//       startToZ = Math.abs(Z) //10
//       ZtoY = Math.abs(Z) + Math.abs(Y) // 20
//       YtoX = Math.abs(X) - Math.abs(Y) // 10
//       result = startToZ + ZtoY + YtoX
//     }
//     if (Y < X && Y < Z && Z > X) {
//       if (Y < 0) result = Math.abs(X)
//       result = -1
//     }
//   }
//   if (X < 0) {
//     if (Y < X || Y > 0) {
//       result = X
//     }
//     if (Y > X && Y < Z) {
//       startToZ = Math.abs(Z) //10
//       ZtoY = Math.abs(Z) + Math.abs(Y) // 20
//       YtoX = Math.abs(X) - Math.abs(Y) // 10
//       console.log(YtoX)
//       result = startToZ + ZtoY + YtoX
//     }
//     if (Y > X && Y > Z) {
//       if (Y > 0) result = Math.abs(X)
//       result = -1
//     }
//   }
//   console.log(result)
// }
// console.log(Main('10 -10 1'))
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// --------------------------------
// 0からの距離でXよりYが大きい場合はXまでの距離を出力
// 0からの距離でXよりYが小さい場合はZが取れるかを判定
  

// Yがマイナスの時はプラスに変えて計算したらしやすい
function Main(input) {
  const args = input.split('\n')
  let X = parseInt(args[0].split(' ')[0], 10)
  let Y = parseInt(args[0].split(' ')[1], 10)
  let Z = parseInt(args[0].split(' ')[2], 10)
  // console.log(Math.abs(X))
  // console.log(Math.abs(Y))
  let result = 0
  if (Y < 0) {
    X = -X
    Y = -Y
    Z = -Z
  }
  if (X < Y) {
    result = Math.abs(X)
  } else {
    if (Z > Y) {
      result = -1
    } else {
      result = Math.abs(Z) + Math.abs(X - Z)
    }
  }
  console.log(result)
}
console.log(Main('10 -10 2'))