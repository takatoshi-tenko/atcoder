// B問題

// やること
// 数字の出力
// M回の数だけ2行目以降が増えるようになる。
// 2行目のindex 1以降を観察して、3行目4行目・・・で数字に被りがあればYes,なければNoを出力

function Main(input) {
  let array = input.trim().split('\n')
  let NM = array[0].split(' ').map(Number)
  let N = NM[0]
  let M = NM[1]
  // console.log(NM, N, M)
  // 2行目以降の配列を格納
  let X = []
  for (let i = 1; i <= M; i++) {
    X[i-1] = array[i].split(' ').map(Number)
  }
  console.log(X, 'Xの値')
  // 参加者分の配列を用意
  let array2 = new Array(N).fill(0)
  console.log(array2, 'array2の値')
  for (let i = 0; i < N; i++) {
    array2[i] = new Array(N).fill(0)
  }
  console.log(array2, 'array2の配列回した後の値')
  // 連想配列の1個目にはその1個目に1を、2個目には2つ目に1を、3個目には3つ目に1を追加・・・
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      // console.log(array2[i][j])
      if (i == j) {
        array2[i][j] = 1
      }
    }
  }
  // 参加者１は1個目のarray2の1つ目の要素に「1」が入る、以下2, 3, 4...も同様
  // [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ] ←こんな感じ。
  console.log(array2, 'array2の2回目の調査')
  // X.length分ループ処理
  for (let i = 0; i < X.length; i++) {
    // 各パーティー時の参加者名簿をhに格納する。例）1回目に1, 2, 3が来てたら[1, 2, 3]みたいになる。
    let h = []
    for (let j = 1; j <= X[i][0]; j++) {
      h.push(X[i][j])
    }
    console.log(h, 'hの値')
    // hを下記に使用する。例）1回目の舞踏会は1, 2, 4の人が参加するから配列は[1, 2, 4]となる
    // array2が1人目、2人目、、、の「誰と同じになったか」の表。同じになったらその番号に該当するindexを1にする。
    // それらを最後まで行なって最終的に0があれば被ってないことになりNoとなる。1で埋まればYesになる。
    for (let k = 0; k < h.length; k++) {
      for (let l = 1; l < h.length; l++) {
        console.log(h[k], h[l])
        console.log([h[k]-1], [h[l]-1])
        array2[h[k]-1][h[l]-1] = 1
        array2[h[l] - 1][h[k] - 1] = 1
        // 初期 [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
        // 1回目 [ [ 1, 1*, 0, 1* ], [ 1*, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 1*, 0, 0, 1 ] ]
        // 2回目 [ [ 1, 1, 0, 1 ], [ 1, 1, 0, 1* ], [ 0, 0, 1, 0 ], [ 1, 1*, 0, 1 ] ]
        // 3回目 [ [ 1, 1, 0, 1 ], [ 1, 1, 0, 1 ], [ 0, 0, 1, 0 ], [ 1, 1, 0, 1 ] ]
        // -------
        // 4回目 [ [ 1, 1, 0, 1 ], [ 1, 1, 1*, 1 ], [ 0, 1*, 1, 0 ], [ 1, 1*, 0, 1 ] ]
        // 5回目 [ [ 1, 1, 0, 1 ], [ 1, 1, 1, 1 ], [ 0, 1, 1, 1* ], [ 1, 1, 1*, 1 ] ]
        // 6回目 [ [ 1, 1, 0, 1 ], [ 1, 1, 1, 1 ], [ 0, 1, 1, 1 ], [ 1, 1, 1, 1 ] ]
      }
    }
  }
  console.log(array2, 'array2の2回目の値')
  for (let k = 0; k < N; k++) {
    for (let l = 0; l < N; l++) {
      if (array2[k][l] === 0) {
        console.log('No')
        return 0
      }
    }
  }
  console.log('Yes')
}

console.log(Main(`
3 3
2 1 2
2 2 3
2 1 3
`))

// function permute(arr, startIndex = 0) {
//   if (startIndex === arr.length - 1) {
//     console.log(arr);
//     return;
//   }

//   for (let i = startIndex; i < arr.length; i++) {
//     // Swap elements
//     [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];

//     // Recursively call permute on the rest of the array
//     permute(arr, startIndex + 1);

//     // Swap back to restore original array
//     [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
//   }
// }

// permute([1, 2, 3]);
