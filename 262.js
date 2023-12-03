// function Main(input) {
//   const args = parseInt(input.trim().split('\n'), 10)
//   // console.log(args)
//   let year = args % 4
//   if (year === 0) {
//     year = args + 2
//   }
//   if (year === 1) {
//     year = args + 1
//   }
//   if (year === 2) {
//     return args
//   }
//   if (year === 3) {
//     year = args + 3
//   }
//   console.log(year)
// }
// // Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
// console.log(Main('2023'))


// function getData() {
//   // これから作ろうとしているもので、JavaScriptでフルネームを生成する必要が出てきました。
//   // ただ現状持っている情報では、名前と苗字をそれぞれのみしかありません。
//   // そのため、JavaScriptで連結させて生成することにしました。
//   const test = [
//       { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
//       { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
//   ];
//   return test.map(buildFullName)
// }

// function Main() {
//   const test = [
//     { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
//     { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
//   ];
//   return test.map(aaa)
// }

// let first = test[0].first_name
// let family = test[0].family_name
// const result = family + ' ' + first
// console.log(result)
// console.log(Main())

// B問題
function Main(input) {
  const args = input.trim().split('\n')
  const NM = args[0].split(' ').map(Number)
  const N = NM[0]
  const M = NM[1]
  let U = []
  for (let i = 1; i <= M; i++) {
    U[i - 1] = args[i].split(' ').map(Number)
  }
  console.log(U, 'Uの値')
  console.log(U[0][0] - 1, '1つ目1個目のUlengthの値')// [0]:iの値 [0]:jの値
  console.log(U[0][1] - 1, '1つ目2個目のUlengthの値')

  let array = new Array(N).fill(0)
  for (let i = 0; i < N; i++) {
    array[i] = new Array(N).fill(0)
  }
  console.log(array, 'arrayの2回目の値')
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) {
        array[i][j] = 1
      }
    }
  }
  console.log(array, 'array3回目の値')

  for (let i = 0; i < U.length; i++) { // 6回繰り返す
    // やりたいこと：Uの各要素、例えば[1, 5]が出たら、array[0][4]とarray[4][0]に1を追加したい
    array[U[i][0] - 1][U[i][1] - 1] = 1
    array[U[i][1] - 1][U[i][0] - 1] = 1
  }
  console.log(array, 'array4回目の値')

  let sum = []
  b = array.map(v => {
    c = v.map((t, i) => t === 1 ? i : '').filter(String)
    sum.push(c)
  })

  let sum2 = sum.concat()
  console.log(sum2, 'sum2の値')
  let ansRow = []
  for (let i = 0; i < sum.length; i++) {
    sum.splice(i, 1)
    console.log(sum, '1回目')
    for (let j = 0; j < sum.length; j++) {
      ansRow.push(sum2[i].filter(num => sum[j].includes(num)))
    }
    sum.splice(i, 0, sum2[i])
  }


  console.log(ansRow, 'ansRowの値')
  let newArr = ansRow.filter((element, index) => ansRow.indexOf(element) === index)
  console.log(newArr)
  lastAnswer = newArr.filter(array => array.length >= 3)
  console.log(lastAnswer)
  // const lastAnswerResult = []
  console.log(lastAnswer.length, '最終的な答えです！！')


  const counts = {}
  for (let i = 0; i < lastAnswer.length; i++) {
    const key = lastAnswer[i].toString()
    counts[key] = (counts[key] || 0) + 1
  }
  console.log(counts, 'countsの値')

  for (const key in counts) {
    if (counts[key] <= 2) {
      delete counts[key]
    }
  }
  console.log(counts)

  const keyArray = Object.keys(counts)
  console.log(keyArray)
  keyArrayRow = []
  for (let i = 0; i < keyArray.length; i++) {
    keyArrayRow.push(keyArray[i].split(',').map(Number))
  }
  console.log(keyArrayRow)

  keyArrayRowResult3 = keyArrayRow.filter(val => val.length === 3)
  console.log(keyArrayRowResult3.length)
  keyArrayRowResultMore3 = keyArrayRow.filter(val => val.length > 3)
  console.log(keyArrayRowResultMore3)

  function permutation(n, r) {
    for (var i = 0, res = 1; i < r; i++) {
      res *= n - i;
    }
    return res;
  }

  function combination(n, r) {
    return permutation(n, r) / permutation(r, r);
  }
  combinationSum = 0
  for (let i = 0; i < keyArrayRowResultMore3.length; i++) {
    combinationSum += combination(keyArrayRowResultMore3[i].length, 3)
  }
  console.log(combinationSum)
  lastOflastAnswer = keyArrayRowResult3.length + combinationSum
  console.log(lastOflastAnswer, 'lastOfLastAnswerの値')
}

console.log(Main(`
8 13
1 5
5 6
6 1
7 4
4 3
3 7
2 5
1 2
8 4
8 3
7 8
8 5
1 8
`))

// a = [ 0, 3, 4 ]
// b = [ 1, 2, 4 ]
// c = [ 1, 2, 4 ]
// d = [ 0, 3, 4 ]
// e = [ 0, 1, 2, 3, 4 ]

// f = [a, b, c, d, e]

// let exam = f[0]
// for (let i = 1; i <= f.length; i++) {
//   for (let j = 0; j < f[i]; j++) {
//     f[i].includes(exam)
//   }
// }

// bbb = b.map((val, i, array) => {
//   return array.includes(a[i])
// })
// console.log(bbb)
// ccc = c.map((val, i, array) => {
//   return array.includes(a[i])
// })
// console.log(ccc)
// ddd = d.map((val, i, array) => {
//   return array.includes(a[i])
// })
// console.log(ddd)
// eee = e.map((val, i, array) => {
//   return array.includes(a[i])
// })
// console.log(eee)

// memo
// a = [1, 2, 3]
// b = [4, 5, 6]
// c = [7, 8, 9]
// d = [10, 11, 12]
// e = [13, 14, 15, 16, 17]
// f = [a, b, c, d, e]
// aaa = f.map((val, index, array) => {
//   let h = []
//   val.map((v, i, a) => {
//     h = a
//     hufa = a.includes(h[i])
//     console.log(hufa, i+'回目')
//     // console.log(a.includes(), i+'回目')
//   })
//   console.log(h, 'hの値')
//   return array.includes(a[index])
// })
// console.log(aaa)
// if (!aaa.includes(false)) {
//   console.log('Yes')
// }
// console.log(f)
// // hofe = b.includes(a[0])
// // console.log(hofe)
// g = a.map((v, i) => v !== 0 ? i : '').filter(String)
// console.log(g)

// f = [
//   [0, 2, 4, 5, 6],
//   [1, 3, 4, 6],
//   [0, 2, 5],
//   [1, 3, 6],
//   [0, 1, 4, 6],
//   [0, 2, 5],
//   [0, 1, 3, 4, 6]
// ]
// f2 = f.concat()

// console.log(f.length)
// result = 0
// ans = 0
// ansRow = []
// for (let i = 0; i < f.length; i++) {
//   f.splice(i, 1)
//   console.log(f, '1回目')
//   for (let j = 0; j < f.length; j++) {
//     // common = f[0].filter(num => f[1].includes(num))
//     ansRow.push(f2[i].filter(num => f[j].includes(num)).join(''))
//     // if (f2[i].every(item => f[j].includes(item))) {
//     //   // ansRow.push(f2[i])
//     //   result++
//     // }
//     // if (result === 2) {
//     //   ans++
//     //   ansRow.push(f2[i].join(''))
//     // }
//     // result.push(f2[i].every(item => f[j].includes(item)))
//   }
//   console.log(result, 'resultの値')
//   console.log(ans, 'ansの値')
//   // result = 0

//   f.splice(i, 0, f2[i])
//   // console.log(f, '2回目')
// }
// console.log(ansRow, 'ansRowの値')
// let newArr = ansRow.filter((element, index) => ansRow.indexOf(element) === index)
// console.log(newArr.length)
// lastAnswer = newArr.filter(array => array.length === 3)
// console.log(lastAnswer, '最終的な答え')
// console.log(lastAnswer.length, '最終的な答え')

// aの要素がすべてeの中に入っていればtrue,でなければfalse

// resultB = a.every(item => b.includes(item))
// resultC = a.every(item => c.includes(item))
// resultD = a.every(item => d.includes(item))
// resultE = a.every(item => e.includes(item))
// console.log(resultB)
// console.log(resultC)
// console.log(resultD)
// console.log(resultE)
// console.log([0, 1, 2, 3] === [0, 1, 2, 3])



// [1, 3, 4, 6]と[0, 1, 4, 6], の共通して含まれてる要素を取り出して新しい配列にするにはどうしたらいいか


// f = [
//   [0, 2, 4, 5, 6],
//   [1, 3, 4, 6],
//   [0, 2, 5],
//   [1, 3, 6],
//   [0, 1, 4, 6],
//   [0, 2, 5],
//   [0, 1, 3, 4, 6]
// ]
// f2 = f.concat()

// common = f[0].filter(num => f[1].includes(num))
// console.log(common)

// remove = f.filter(array => array.length > 3)
// console.log(remove)

ssss = [
  [0, 1, 4, 5, 7],
  [0, 1, 4],
  [2, 3, 6, 7],
  [2, 3, 6, 7],
  [0, 1, 4, 5, 7],
  [0, 4, 5],
  [2, 3, 6, 7],
  [0, 2, 3, 4, 6, 7]
]

lastResult = [
  [0, 1, 4], [0, 1, 4, 5, 7],
  [0, 4, 5], [0, 4, 7],
  [0, 1, 4], [0, 1, 4],
  [2, 3, 6, 7], [2, 3, 6, 7],
  [2, 3, 6, 7], [2, 3, 6, 7],
  [2, 3, 6, 7], [2, 3, 6, 7],
  [0, 1, 4, 5, 7], [0, 1, 4],
  [0, 4, 5], [0, 4, 7],
  [0, 4, 5], [0, 4, 5],
  [2, 3, 6, 7], [2, 3, 6, 7],
  [2, 3, 6, 7], [0, 4, 7],
  [2, 3, 6, 7], [2, 3, 6, 7],
  [0, 4, 7], [2, 3, 6, 7]
]

const array2 = []

lastResult.forEach(subArray => {
  if (!array2.some(arr => JSON.stringify(arr) === JSON.stringify(subArray)))
    array2.push(subArray)
});
console.log(array2)
console.log(lastResult[1])

console.log(JSON.stringify(lastResult))

const counts = {}
for (let i = 0; i < lastResult.length; i++) {
  const key = lastResult[i].toString()
  counts[key] = (counts[key] || 0) + 1
}
console.log(counts, 'countsの値')

for (const key in counts) {
  if (counts[key] <= 2) {
    delete counts[key]
  }
}
console.log(counts)

const keyArray = Object.keys(counts)
console.log(keyArray)
keyArrayRow = []
for (let i = 0; i < keyArray.length; i++) {
  keyArrayRow.push(keyArray[i].split(',').map(Number))
}
console.log(keyArrayRow)

keyArrayRowResult3 = keyArrayRow.filter(val => val.length === 3)
console.log(keyArrayRowResult3.length)
keyArrayRowResultMore3 = keyArrayRow.filter(val => val.length > 3)
console.log(keyArrayRowResultMore3)

function permutation(n, r) {
  for (var i = 0, res = 1; i < r; i++) {
    res *= n - i;
  }
  return res;
}

function combination(n, r) {
  return permutation(n, r) / permutation(r, r);
}
combinationSum = 0
for (let i = 0; i < keyArrayRowResultMore3.length; i++) {
  combinationSum += combination(keyArrayRowResultMore3[i].length, 3)
}
console.log(combinationSum)
lastOfLastResult = keyArrayRowResult3.length + combinationSum
console.log(lastOfLastResult)
console.log(combination([0, 1, 4, 5, 7].length, 3), 'sss')

// function getCombination(array, length, start = 0, initial = []) {
//   const result = []
//   console.log(length, 'length')
//   if (length === 1) {
//     console.log('通った')
//     return array.map((value) => [...initial, value])
//   }
//   for (let i = start; i <= array.length - length; i++) {
//     const subCombination = getCombination(array, length-1, i+1, [])
//     result.push(...subCombination)
//   }
//   return result
// }
// const combination = getCombination(keyArrayRowResultMore3[0], 3)
// console.log(combination, 'combinationの値')


// [[0,1,4],[0,1,4,5,7],[0,4,5],[0,4,7],[0,1,4],[0,1,4],[2,3,6,7],[2,3,6,7],[2,3,6,7],[2,3,6,7],[2,3,6,7],[2,3,6,7],[0,1,4,5,7],[0,1,4],[0,4,5],[0,4,7],[0,4,5],[0,4,5],[2,3,6,7],[2,3,6,7],[2,3,6,7],[0,4,7],[2,3,6,7],[2,3,6,7],[0,4,7],[2,3,6,7]]

// { '0,1,4': 4, '0,4,5': 4, '0,4,7': 4, '2,3,6,7': 12 }のkey要素を配列に変換する方法をJavaScriptで教えて

// 8 13
// 1 5
// 5 6
// 6 1
// 7 4
// 4 3
// 3 7
// 2 5
// 1 2
// 8 4
// 8 3
// 7 8
// 8 5
// 1 8