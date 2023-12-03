// A問題

// 高橋が走る時の時間の経過と距離を計測
// 高橋が休む時の時間の経過を計測
// 青木が走る時の時間の経過と距離を計測
// 青木が休む時の時間の経過を計測

function Main(input) {
  const args = input.split('\n')
  const [A, B, C, D, E, F, X] = args[0].split(' ').map(Number)
  let takahashiRun = 0 // 高橋が何メートル走ったのかを計測
  let aokiRun = 0 // 青木が何メートル走ったのかを計測
  let takahashiPastTime = 0 // 高橋が使用した時間を計測
  let aokiPastTime = 0 // 青木が使用した時間を計測
  // 高橋が走る時の時間の経過と距離を計測
  while (takahashiPastTime < X) {
    for (let i = 0; i < A; i++) {
      takahashiRun += B
      takahashiPastTime++
      if (takahashiPastTime >= X) {
        break
      }
    }
    // 高橋が休む時の時間の経過と距離を計測
    for (let i = 0; i < C; i++) {
      takahashiPastTime++
      // console.log(takahashiPastTime, [i])
      if (takahashiPastTime >= X) {
        break
      }
    }
  }
  // 青木が走る時の時間の経過と距離を計測
  while (aokiPastTime < X) {
    for (let i = 0; i < D; i++) {
      aokiRun += E
      aokiPastTime++
      if (aokiPastTime >= X) {
        break
      }
    }
    // 青木が休む時の時間の経過と距離を計測
    for (let i = 0; i < F; i++) {
      aokiPastTime++
      if (aokiPastTime >= X) {
        break
      }
    }
  }
  if (takahashiRun > aokiRun) {
    console.log('Takahashi')
  } else if (takahashiRun < aokiRun) {
    console.log('Aoki')
  } else {
    console.log('Draw')
  }
}

console.log(Main('1 1 1 1 1 1 1'))
