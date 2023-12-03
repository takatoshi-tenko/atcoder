// function Main(input) {
//   input = input.trim().split(/\s+/).map(Number);
//   const n = input.shift();
//   const m = input.shift();
//   const uv = input;
//   console.log(n)
//   console.log(m)
//   console.log(uv)
//   var lines = Array(n+1).fill().map(() => Array(n+1).fill(false));
//   console.log(lines)
//   let cnt = 0;
//   for(let i = 0; i < m; i++) {
//     lines[uv[i*2]][uv[i*2+1]] = true;
//     lines[uv[i*2+1]][uv[i*2]] = true;
//   }
//   console.log(lines, 'lines2回目の値')
  
//   for(let i = 1; i <= n; i++) {
//     for(let j = i+1; j <= n; j++) {
//       for(let k = j+1; k <= n; k++) {
//         if(lines[i][j] && lines[j][k] && lines[k][i]) cnt++;
//       }
//     }
//   }
  
//   console.log(cnt);
  
// }

// B問題
// function Main(input) {
//   const args = input.trim().split('\n')
//   const NM = args[0].split(' ').map(Number)
//   const N = NM[0]
//   const M = NM[1]
//   let U = []
//   for (let i = 1; i <= M; i++) {
//     U[i - 1] = args[i].split(' ').map(Number)
//   }
//   let array = new Array(N).fill(0)
//   for (let i = 0; i < N; i++) {
//     array[i] = new Array(N).fill(0)
//   }
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (i === j) {
//         array[i][j] = 1
//       }
//     }
//   }
//   for (let i = 0; i < U.length; i++) { // 6回繰り返す
//       // やりたいこと：Uの各要素、例えば[1, 5]が出たら、array[0][4]とarray[4][0]に1を追加したい
//       array[U[i][0] - 1][U[i][1] - 1] = 1
//       array[U[i][1] - 1][U[i][0] - 1] = 1
//   }
//   let sum = []
//   b = array.map(v => {
//     c = v.map((t, i) => t === 1 ? i : '').filter(String)
//     sum.push(c)
//   })
//   let sum2 = sum.concat()
//   let ansRow = []
//   for (let i = 0; i < sum.length; i++) {
//     sum.splice(i, 1)
//     for (let j = 0; j < sum.length; j++) {
//       ansRow.push(sum2[i].filter(num => sum[j].includes(num)).join(''))
//     }
//     sum.splice(i, 0, sum2[i])
//   }
//   let newArr = ansRow.filter((element, index) => ansRow.indexOf(element) === index)
//   lastAnswer = newArr.filter(array => array.length === 3)
//   console.log(lastAnswer.length) // 最終的な答え
// }
// // Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

// console.log(Main(`
// 5 7
// 1 2
// 2 4
// 4 1
// 1 3
// 3 4
// 5 4
// 2 5
// `))

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

function Main(input) {
  let lines = input.trim().split('\n')
  let [N, M] = lines[0].split(' ').map(Number)

  let ans = 0
  const graph = Array(N + 1).fill().map(() => ({}))
  console.log(graph)
  for (let i = 1; i < M + 1; i++) {
    const [a, b] = lines[i].split(' ').map(Number)
    console.log([a, b])
    graph[a][b] = true
    console.log(graph)
    graph[b][a] = true
    console.log(graph)
    for (let l = 1; l <= N; l++) {
      console.log(graph[l][a] && graph[l][b], 'if文の中')
      console.log(graph[l][a] && graph[l][b], 'if文の中')
      console.log(graph[l][a], graph[l][b], 'if文の中のabの値')
      if (graph[l][a] && graph[l][b]) ans++
    }
  }
  console.log(graph, '2回目')
  console.log(ans.toString())
}

// {},
// { '2': true, '5': true, '6': true, '8': true },
// { '1': true, '5': true },
// { '4': true, '7': true, '8': true },
// { '3': true, '7': true, '8': true },
// { '1': true, '2': true, '6': true, '8': true },
// { '1': true, '5': true },
// { '3': true, '4': true, '8': true },
// { '1': true, '3': true, '4': true, '5': true, '7': true }