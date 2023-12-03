// A問題

// HH:MMの形式で表示
// 24時間表示

function Main(input) {
  input = Number(input)
  hour = 0
  min = 0
  if (input >= 60) {
    hour = 21 + Math.floor(input / 60)
    min = input % 60
  } else {
    hour = 21
    min = input % 60
  }
  if (min < 10) {
    min = '0' + min
  }
  console.log(hour.toString() + ':' + min.toString())
}

console.log(Main('100'))

// B問題やること
// グリッド数字表を作る
// 上下左右斜めの8方向の動きを決める
//   上：
//   下：
//   左：
//   右：
//   斜め左上：
//   斜め右上：
//   斜め左下：
//   斜め左下：
// 高橋の初期位置を決める：
//   全数字の最大数字に移動する。
//     数字が同じ場所が複数ある場合、次の処理で大きい方を選択対象とする
//   そこから8方向の中で最も高い数字の方向に移動する。
//     数字が同じ場所の場合、次の処理で大きい方を選択対象とする
//   移動した方向の数字を取得する。同じ方向にもう一回進む。
// 通ってきた4つの数字を並べて出力する

// function Main(input) {
//   const args = input.trim().split('\n')
//   const matrix = args.map((e) => e.split('').map(Number))
//   console.log(args)
//   console.log(matrix)
// }

// console.log(Main(`
// 4
// 1161
// 1119
// 7111
// 1811
// `))