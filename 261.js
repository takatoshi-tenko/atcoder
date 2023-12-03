// A問題
function Main(input) {
  const arg = input.trim().split('\n')
  // const answer = 0
  const num = arg[0].split(' ')
  const redPoint = num[1] - num[0]
  const bluePoint = num[3] - num[2]
  const firstRed = num[0]
  const firstBlue = num[0]
  redLength = []
  for (let i = 0; i < redPoint; i++) {
    redLength += firstRed
  }
  return redLength
}
// console.log(Main('0 3 1 5'))


// B問題
// マス分のテーブルをループ処理する
// 例：
// 1,2 がWの時、2,1 はL になる
// 1,2 がLの時、2,1 はW になる
// 1,2 Dが時、2,1 はDになる
// 1,1 の時-になる
// 上記の条件が破綻したらincorrect, 破綻しなかったらcorrectを出力

function checkTournamentResult(input) {
  const table = input.trim().split('\n')
  const onlyTable = table.slice(1)
  const result = onlyTable.map((item) => {
    return item.split('')
  })

  for (let i = 0; i < table[0]; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (result[i] === result[j]) {
        if (result[i][j] !== '-') return console.log('incorrect')
      }
      if (result[i][j] === 'W') {
        if (result[j][i] !== 'L') return console.log('incorrect')
      }
      if (result[i][j] === 'L') {
        if (result[j][i] !== 'W') return console.log('incorrect')
      }
      if (result[i][j] === 'D') {
        if (result[j][i] !== 'D') return console.log('incorrect')
      }
    }
  }
  return console.log('correct')
}

function checkTournamentResult(input) {
  const lines = input.trim().split('\n');
  const N = parseInt(lines[0]);
  const results = lines.slice(1).map(item => item.split(''));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        const outcome = results[i][j];

        if (
          (outcome === 'W' && results[j][i] !== 'L') ||
          (outcome === 'L' && results[j][i] !== 'W') ||
          (outcome === 'D' && results[j][i] !== 'D')
        ) {
          return console.log('incorrect');
        }
      } else if (results[i][j] !== '-') {
        return console.log('incorrect');
      }
    }
  }

  return console.log('correct');
}

// Example usage
const input = '4\n-WLD\nL-WD\nWL-D\nDL-W';
checkTournamentResult(input);

console.log(checkTournamentResult(`
2
-D
D-
`))