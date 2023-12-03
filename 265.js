// 1個買える額と3個で買える額の安いようで買うようにする
// 1個の方は　そのまま
// 3個の方は1個あたりの値段を出す
// 3個が安かったら余が出るまで買って、最後に1個の方を計上、
// 1個の方が安かったら最初から1個の方で計上

// function Main(input) {
//   const args = input.split('\n')
//   const X = parseInt(args[0].split(' ')[0], 10)
//   const Y = parseInt(args[0].split(' ')[1], 10)
//   const N = parseInt(args[0].split(' ')[2], 10)
//   const oneY = Y / 3
//   let result = 0
//   if (X < oneY) {
//     // 1個の方が安かったら最初から1個の方で計上
//     result = X * N
//   }
//   if ( X > oneY) {
//     // 3個が安かったら余りが出るまで買って、最後に1個の方を計上、
//     const countY = Math.floor(N / 3)
//     sumY = Y * countY
//     leaveApple = N - 3 * countY
//     sumApple = leaveApple * X
//     result = sumY + sumApple
//   }
//   console.log(result)
// }
// console.log(Main('10 40 10'))
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// B問題
// やること
// 各行の値を取得
//   1行目：Nは部屋の数
//   　　　Mはボーナス部屋
//   　　　Tが持ち時間
//   2行目：Aが各部屋を通過する時の消費時間
//   3行目：Xがボーナスがある部屋の番号
// 　　　Yが付与されるボーナス時間
// 　　　3行目以降はループ処理を行う
// 持ち時間からAの値をどんどん減らしていく
// Xの値がAのindexにヒットした時にその時のYをTに加える
// Aのindexが終了した時にTがプラスだったらYesを出力、マイナスだったらNoを出力

// 登場人物 = [N M T A X Y]

// function Main(input) {
//   const args = input.trim().split('\n')
//   // console.log(args)
//   N = parseInt(args[0].split(' ')[0], 10)
//   M = parseInt(args[0].split(' ')[1], 10)
//   T = parseInt(args[0].split(' ')[2], 10)
//   A = args[1].split(' ').map(Number)

//   countBonus = parseInt(args.slice(2).length)
//   bonusArray = args.slice(2)
//   console.log(bonusArray)
//   // console.log(args.slice(2))
//   //3行目以降に出てきた配列の要素をXとYに分ける
//   // Xは左側、Yは右側、数字として取得
//   let arrayX = []
//   let arrayY = []
//   let hitXNumber = 0
//   let hitYNumber = 0
//   for (let i = 0; i < bonusArray.length; i++) {
//     // console.log('test')
//     arrayX[i] = parseInt(bonusArray[i].split(' ')[0], 10)
//     // console.log('firstnum')
//     arrayY[i] = parseInt(bonusArray[i].split(' ')[1], 10)
//     // console.log('secondnum')

//     // if (arrayX.includes(2)) {
//     //   console.log("trueになった！")
//     //   // trueの時、trueの要素のindexを返す
//     //   hitXNumber = arrayX.indexOf(arrayX[i])
//     //   console.log('aaa')
//     //   console.log(arrayX[i])
//     //   console.log(arrayX) // [ 2 ]
//     //   console.log(hitXNumber)
//     //   // 同じindexの要素を取り出す
//     //   hitYNumber = arrayY[hitXNumber]
//     //   console.log(hitYNumber)
//     // }  
//   }
//   console.log(arrayX)
//   console.log(arrayY)

//   // X = parseInt(args.slice(2)[1].split(' ')[0], 10)
//   // Y = parseInt(args.slice(2)[1].split(' ')[1], 10)
//   // console.log(X)
//   // console.log(Y)

//   // bonus = []
//   // for (let i = 0; i < bonusArray.length; i++) {
//   //   bonusX = parseInt(args.slice(2)[i].split(' ')[0], 10)
//   //   bonusY = parseInt(args.slice(2)[i].split(' ')[1], 10)
//   // }
//   // console.log(bonusX)
//   // console.log(bonusY)
//   // console.log(X)
//   // console.log(Y)
//   // console.log(countBonus)

//   // X = parseInt(args[2].split(' ')[0], 10)
//   // Y = parseInt(args[2].split(' ')[1], 10)

//   let result = 0
//   for (let i = 0; i < A.length; i++) {
//     console.log(A.length) //3
//     // console.log(arrayX[i])
//     console.log(arrayX.includes(i)) //false false true
//     console.log(T) //10 5
//     // bonusX[i] = parseInt(args.slice(2)[i].split(' ')[0], 10)
//     // bonusY[i] = parseInt(args.slice(2)[i].split(' ')[1], 10)

//     // if (arrayX.includes(2)) {
//     //   console.log("trueになった！")
//     //   // trueの時、trueの要素のindexを返す
//     //   aaa = arrayX.indexOf(arrayX[i])
//     //   console.log(arrayX)
//     //   console.log(aaa)
//     //   // 同じindexの要素を取り出す
//     //   sameIndexValue = arrayY[aaa]
//     //   console.log(sameIndexValue)
//     // }

//     // console.log(arrayX.includes(i))
//     if (arrayX.includes(i+1)) { //
//       console.log('ボーナスゲット時間消化')
//       // ボーナスポイントをTに付与
//       // その上でAを消化
//       // 最後の値を返す
//       trueIndexNum = arrayX.indexOf(arrayX[i-1])
//       console.log(arrayX) //[2, 34]
//       console.log(trueIndexNum) //0
//       hitYNumber = arrayY[trueIndexNum]
//       console.log(hitYNumber) //10
//       // TにYを増加させる
//       T = T + hitYNumber - A[i]
//       console.log(T)
//       console.log(arrayY)
//       // T - Aを結果賭して返す
//       result = T
//       console.log(T)
//       console.log(result)
//       console.log("aaa")
//     } else {
//       console.log('シンプル時間消化')
//       T = T - A[i] //1回目は10 - 5 = 5になる
//       result = T
//       console.log(T)
//       console.log(result)
//       // console.log(T - A[i])
//     }
//     // if (result === 0) return 'No'
//   }
//   console.log(result)
//   if (result >= 0) {
//     return console.log('Yes')
//   } else if (result < 0) {
//     return console.log('No')
//   }
// }

// console.log(Main('4 1 10\n10 7 5\n2 10\n34 55'))

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

// const a = [10, 20, 30, 40, 50]
// const result = a.indexOf(20)
// console.log(result)



// function Main(input) {
//   const args = input.trim().split('\n')
//   N = parseInt(args[0].split(' ')[0], 10)
//   M = parseInt(args[0].split(' ')[1], 10)
//   T = parseInt(args[0].split(' ')[2], 10)
//   A = args[1].split(' ').map(Number)

//   countBonus = parseInt(args.slice(2).length)
//   bonusArray = args.slice(2)
//   console.log(bonusArray)
//   console.log(bonusArray.length)
//   let arrayX = []
//   let arrayY = []
//   let result = 0
//   for (let i = 0; i < bonusArray.length; i++) {
//     arrayX[i] = parseInt(bonusArray[i].split(' ')[0], 10)
//     arrayY[i] = parseInt(bonusArray[i].split(' ')[1], 10)

//     if (arrayX.includes(i+1)) { //ボーナスが出る時の処理
//       console.log('ボーナス追加')
//       findIndex = arrayX.indexOf(i+1)
//       plusTimeValue = arrayY[findIndex]
//       console.log(`Yの値は : ${plusTimeValue}です`)
//       T = T + arrayY[findIndex] - A[i]
//       result = T
//       console.log(`途中残り時間 : ${result}`)
//       if (result <= 0) return 'No'
//     } else {
//       console.log('通常消化')
//       T = T - A[i]
//       result = T
//       console.log(`途中残り時間 : ${result}`)
//       if (result <= 0) return 'No'
//     }
//   }

//   // for (let i = 0; i < A.length; i++) {
//   //   console.log(arrayX.includes(i+1)) //false false true
//   //   console.log(`Tの値 : ${T}`) //10 5
//   //   if (arrayX.includes(i+1)) { //
//   //     console.log('ボーナスゲット時間追加')
//   //     // ボーナスポイントをTに付与
//   //     // その上でAを消化
//   //     // 最後の値を返す
//   //     trueIndexNum = arrayX.indexOf(i+1)
//   //     console.log(trueIndexNum) //
//   //     console.log(arrayX) //[2, 34]
//   //     console.log(`Xが呼び出された時のindexの数 : ${trueIndexNum}`) //0
//   //     hitYNumber = arrayY[trueIndexNum]
//   //     console.log(`Xが呼び出された時のYの値 : ${hitYNumber}`) //10
//   //     // TにYを増加させる
//   //     T = T + hitYNumber - A[i]
//   //     console.log(T)
//   //     console.log(arrayY)
//   //     // T - Aを結果賭して返す
//   //     result = T
//   //     console.log(T)
//   //     console.log(result)
//   //     console.log("--------------------------------")
//   //   } else {
//   //     console.log('シンプル時間消化')
//   //     T = T - A[i] //1回目は10 - 5 = 5になる
//   //     result = T
//   //     console.log(T)
//   //     console.log('--------------------------------')
//   //   }
//   //   if (result === 0) return 'No'
//   // }
//   console.log(result)
//   if (result > 0) {
//     console.log('Yes')
//   }
// }
// console.log(Main('11 7 10\n5 7 6 11 1 3 7 1 3 8 1\n2 10\n3 5\n4 5\n5 5\n6 5\n7 5\n8 5'))

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))






// function Main(input) {
//   const args = input.trim().split('\n')
//   N = parseInt(args[0].split(' ')[0], 10)
//   M = parseInt(args[0].split(' ')[1], 10)
//   T = parseInt(args[0].split(' ')[2], 10)
//   A = args[1].split(' ').map(Number)
//   bonusArray = args.slice(2)
//   let arrayX = []
//   let arrayY = []
//   let result = 0

//   for (let i = 0; i < bonusArray.length; i++) {
//     arrayX[i] = parseInt(bonusArray[i].split(' ')[0], 10)
//     arrayY[i] = parseInt(bonusArray[i].split(' ')[1], 10)

//     if (arrayX.includes(i+1)) { //ボーナスが出る時の処理
//       findIndex = arrayX.indexOf(i+1)
//       plusTimeValue = arrayY[findIndex]
//       T = T + arrayY[findIndex] - A[i]
//       result = T
//     } else {
//       T = T - A[i]
//       result = T
//     }
//     if (result === 0) return 'No'
//   }
//   if (result >= 0) {
//     return console.log('Yes')
//   } else if (result < 0) {
//     return console.log('No')
//   }
// }
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))



// function Main(input) {
//   const args = input.trim().split('\n')
//   N = parseInt(args[0].split(' ')[0], 10)
//   M = parseInt(args[0].split(' ')[1], 10)
//   T = parseInt(args[0].split(' ')[2], 10)
//   A = args[1].split(' ').map(Number)
//   bonusArray = args.slice(2)
//   let arrayX = []
//   let arrayY = []
//   let result = 0

//   for (let i = 0; i < bonusArray.length; i++) {
//     arrayX[i] = parseInt(bonusArray[i].split(' ')[0], 10)
//     arrayY[i] = parseInt(bonusArray[i].split(' ')[1], 10)

//     // if (arrayX.includes(i+1)) { //ボーナスが出る時の処理
//     //   findIndex = arrayX.indexOf(i+1)
//     //   plusTimeValue = arrayY[findIndex]
//     //   T = T + arrayY[findIndex] - A[i]
//     //   result = T
//     //   if (result <= 0) return 'No'
//     // } else {
//     //   T = T - A[i]
//     //   result = T
//     //   if (result <= 0) return 'No'
//     // }
//   }
//   console.log(arrayX)
//   console.log(arrayY)
//   for (let i = 0; i < bonusArray.length; i++) {
//     if (arrayX.includes(i+1)) { //ボーナスが出る時の処理
//       findIndex = arrayX.indexOf(i+1)
//       console.log(`findindexの値 : ${findIndex}`)
//       plusTimeValue = arrayY[findIndex]
//       console.log(`plusTimeValueの値 : ${plusTimeValue}`)
//       T = T + arrayY[findIndex] - A[i]
//       result = T
//       console.log(`ボーナス後は${result}`)
//       if (result <= 0) return 'No'
//     } else {
//       T = T - A[i]
//       result = T
//       console.log(`ボーナス抜きは${result}`)
//       if (result <= 0) return 'No'
//     }
//   }
//   return 'Yes'
// }
// console.log(Main('11 7 10\n5 7 6 12 1 3 7 1 3 8 1\n2 10\n3 5\n4 5\n5 5\n6 5\n7 5\n8 5'))
// // Main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// function Main(input) {
//   const args = input.split('\n')
//   const X = parseInt(args[0].split(' ')[0], 10)
//   // console.log(X)
//   const Y = parseInt(args[0].split(' ')[1], 10)
//   // console.log(Y)
//   const N = parseInt(args[0].split(' ')[2], 10)
//   // console.log(N)
//   const oneY = Y / 3
//   let result = 0
//   if (X < oneY) {
//     // 1個の方が安かったら最初から1個の方で計上
//     result = X * N
//   }
//   if ( X > oneY) {
//     // 3個が安かったら余りが出るまで買って、最後に1個の方を計上、
//     const countY = Math.floor(N / 3)
//     sumY = Y * countY
//     // console.log(countY)
//     // console.log(sumY)
//     leaveApple = N - 3 * countY
//     // console.log(leaveApple)
//     sumApple = leaveApple * X
//     // console.log(sumApple)
//     result = sumY + sumApple
//   }
//   console.log(result)
// }
// // console.log(Main('10 40 10'))
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// function Main(input) {
//   const args = input.trim().split('\n')
//   const pointArgs = args[0].split(' ')
//   const pointTime = args[1].split(' ')
//   let [N, M, T] = args[0].split(' ')
//   const bonusNum = args.slice(2)
//   let X = []
//   let Y = []
//   for (let i = 0; i < bonusNum.length; i++) {
//     a = bonusNum[i].split(' ')
//     X.push(a[0])
//     Y.push(a[1])
//   }
//   X = X.map(Number)
//   Y = Y.map(Number)
//   console.log(X)
//   console.log(Y)
//   const A = []
//   A.push(...pointTime)

//   console.log(A)
//   let result = 0
//   for (let i = 0; i < N - 1; i++) {
//     console.log('呼ばれた！')
//     T = T - A[i]
//     let found = X.find(val => val === i+1)
//     let foundIndex = (element) => element === found
//     let resultIndex = X.findIndex(foundIndex)
//     if (found) {
//       T = T + Y[resultIndex]
//     }
//     result = T
//     console.log(found)
//     // if (X.includes(i+1))
//     console.log(result)
//     if (result) {
//       console.log('Yes')
//     } else {
//       console.log('No')
//     }
//   }
// }

function Main(input) {
  const args = input.trim().split('\n')
  const pointTime = args[1].split(' ')
  let N = args[0].split(' ')[0]
  let T = args[0].split(' ')[2]
  let numT = parseInt(T, 10)
  const bonusNum = args.slice(2)
  let X = []
  let Y = []
  let A = []
  let result = 0
  for (let i = 0; i < bonusNum.length; i++) {
    a = bonusNum[i].split(' ')
    X.push(a[0])
    Y.push(a[1])
  }
  X = X.map(Number)
  Y = Y.map(Number)
  A.push(...pointTime)
  A = A.map(Number)
  for (let i = 0; i < N - 1; i++) {
	let found = X.find(val => val === i+1)
    let resultIndex = X.indexOf(found)
    if (found) {
      numT = numT + Y[resultIndex]
      X.shift()
      Y.shift()
    }
    numT = numT - A[i]
    if (numT <= 0) {
      if (i === N -1) {
        console.log('Yes')
      }
      console.log('No')
      return
    }
    result = numT
  }
  if (result >= 0) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

console.log(Main(`
4 1 10
9 7 5
2 10
3 2
`))