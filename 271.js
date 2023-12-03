// B問題

// 実装方針
// 整数の配列を格納する配列を用意。Nでループして生成
// 各整数の配列の数を0番目の要素の数分だけループさせて生成
// s1のt1のクエリと、整数の配列の何個目の何番目かを整合性合うようにして、値を取得
// それを出力結果として出す


function Main(input) {
  const args = input.trim().split('\n')
  let NQ = args[0].split(' ').map(Number)
  let N = NQ[0]
  let Q = NQ[1]
  console.log(N)
  console.log(Q)

  let L = []
  for (let i = 1; i <= N; i++) {
    L[i-1] = args[i].split(' ').map(Number)
  }
  console.log(L)

  let S = []
  // N+1=4, N+N+1=7
  for (let i = N+1; i < Q+N+1; i++) {
    console.log(i, 'iの値')
    S[i-N-1] = args[i].split(' ').map(Number)
  }
  let afterS = S.map(val => {
    let afterS2 = val.map(val2 => {
      val2--
      return val2
    })
    return afterS2
  })
  // [ [ 0, 2 ], [ 1, 0 ] ] 
  console.log(afterS, 'afterSの値')
  console.log(S, 'Sの値')
  let ans = []

  let nums = []
  for (let i = 0; i < L.length; i++) {
    let h = []
    for (let j = 1; j <= L[i][0]; j++) {
      h.push(L[i][j])
    }
    nums.push(h)
    console.log(h)
  }
  console.log(nums, 'numsの値')
  console.log(nums[0][1])
  // console.log(nums[afterS[0][0]][afterS[0][1]]) ←これを作る
  for (let i = 0; i < Q; i++) {
    ans.push(nums[afterS[i][0]][afterS[i][1]])
    // ans.push(nums[S[i-1][j-1]])
    console.log('aaaaa')
    console.log(ans, 'ansの値')
  }
console.log(ans.join('\n'))
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
console.log(Main(`
3 4
4 128 741 239 901
2 1 1
3 314 159 26535
1 1
2 2
3 3
1 4
`))