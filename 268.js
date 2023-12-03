// やること
// 文字列を取得するargs を定義
// それらの1個ずつの数字を配列で持つようなnumを用意して中身を数字に変換する.map(Number)を付与
// 数字の種類を格納するオブジェクトを用意
// そこにnum の値を一個ずつ入れて種類とその個数をまとめる
// 種類の数をObject.keys().lengthでカウントする
// 答えを出力する

// function Main(input) {
//   const args = input.split('\n')
//   const num = args[0].split(' ').map(Number)
//   // console.log(num)

//   let count = {}
//   for (let i = 0; i < num.length; i++) {
//     count[num[i]] = (count[num[i]] || 0) + 1
//   }
//   // console.log(count)
//   console.log(Object.keys(count).length)
// }
// console.log(Main('31 9 24 31 24'))
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

// const arr = [31, 9, 24, 31, 24]
// let count = {}
// for (let i = 0; i<arr.length; i++) {
//   const elm = arr[i]
//   count[elm] = (count[elm] || 0) + 1
// }
// console.log(count)

// let result = 0
// for (let i = 0; i<count.length; i++) {
//   result = count.length
// }

// console.log(Object.keys(count).length)


// B問題！

// やること
// 2列を出力するのを定義
// 1列目には任意の文字列を定義
// 2列目にも任意の文字列を定義。
//   1列目の文字列が、2列目の文字列の最初に合致してたらYesを出力、合致してなかったらNoを出力

function Main(input) {
  const args = input.split('\n')
  const prefix = args[0]
  const string = args[1]

  if (string.startsWith(prefix)) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
// const aaaa = 'Hello!'
// const bbbb = 'h'

console.log(Main('code\natcoder'))
// console.log(aaaa.startsWith(bbbb))