// A問題

// N:今の年齢
// M:当時の年齢←この時の身長を求めたい
// X:身長が伸びる上限の年齢
// T:今の身長
// D:毎年伸びる新調の長さ

// 38歳で168cmの高橋がいる。
// 17歳までは毎年3cmずつ身長が伸びてる
// 17歳以降は身長が伸びない
// 20歳の時は何cmですか→答え168cm

// N M X T D

// 生まれた時の身長を出す。
// 身長が伸びてる時期と、終わった時で場合わけ、
// Mがいつに属するかでその場合分けにあてはめて答えを出力

function Main(input) {
  input = input.trim().split('\n')
  const args = input[0].trim().split(' ').map(n => parseInt(n, 10))
  const born = args[3] - (args[2] * args[4])
  let result = 0
  if (args[1] < args[2]) {
    result = born + args[1] * args[4]
  } else {
    result = born + args[2] * args[4]
  }
  console.log(result)
}

console.log(Main('100 10 100 180 1'))