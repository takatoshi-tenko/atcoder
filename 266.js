// やること
// 文字列取得 8文字　01234567
// 何文字か計測
// 文字列の絶対値＋1 / 2 を実行
// 結果を表示

function Main (input) {
  const alphabetArgs = input.split('\n')
  console.log(alphabetArgs)
  const character = alphabetArgs[0].split('')
  console.log(character)
  const lengthString = character.length
  console.log(lengthString)
  const centerString = Math.floor((lengthString) / 2)
  console.log(centerString)
  console.log(character[centerString])
}

console.log(Main('atcoder'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// // Math.abs()を使いそう



// B問題
// やること
// Nを定義
// 998244353で割り切れるようにNから任意の数を引く→X
// Xを求めて出力する

// function Main(input) {
//   let num = BigInt(input)
//   // console.log(num)
//   let result = num % 998244353n
//   if (result < 0) {
//     result += 998244353n
//   }
//   console.log(result.toString())
// }

// console.log(Main('-9982443534'))
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))