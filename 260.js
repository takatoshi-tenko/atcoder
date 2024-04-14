// B問題

// 数学の点数、英語の点数、合計の点数をまとめてオブジェクトとして格納する
// それを全部やった配列を用意する
// const result = [
//   {math: 80, en: 70, total: 150},
//   {math: 90, en: 80, total: 170},
//   {math: 100, en: 90, total: 190},
//   {math: 110, en: 100, total: 210},
// ]
// let passed = []
// 数学の点数が高い人の中から人数分ループして高い人から
// そのインデックスを答えに格納する→2人だったら3,4をpassedにpushする
// 英語も同様
// 合計も同様
// 最後にpassedの中をソートして出力する


function Main(input) {
  const lines = input.trim().split('\n')
  const number = lines[0].split(' ')
  const N = parseInt(lines[0])
  const results = lines.slice(1).map(item => item.split(' '));
  console.log(results)
  // console.log(number)

  const score = results[0].map((math, index) => {
    return {
      math: parseInt(math),
      en: parseInt(results[1][index])
    }
  })

  let mathPass = []
  let englishPass = []
  let mathAndEnglishPass = []
  let totalPass = []

  console.log(score)
  console.log(mathPass[0])
}

console.log(Main(`
6 1 0 2
80 60 80 60 70 70
40 20 50 90 90 80
`))


const test = [10, 20, 40, 40, 50, 60, 10, 60];

// 最大の値を持つ要素のインデックスを取得
const indexOfMaxValue = test.indexOf(Math.max(...test));

console.log(indexOfMaxValue); // 出力: 5



function determinePassingOrder(N, X, Y, Z, scores) {
  // 合格者を格納する配列
  const passedStudents = [];

  // 合格者を数学の点で降順ソートし、同点の場合は番号が小さい順にソート
  scores.sort((a, b) => b.math - a.math || a.index - b.index);

  // 数学で上位 X 人を合格
  passedStudents.push(...scores.slice(0, X));

  // まだ合格していない受験者で、英語の点で降順ソートし、同点の場合は番号が小さい順にソート
  const remainingStudents = scores.slice(X);
  remainingStudents.sort((a, b) => b.english - a.english || a.index - b.index);

  // 英語で上位 Y 人を合格
  passedStudents.push(...remainingStudents.slice(0, Y));

  // まだ合格していない受験者で、数学と英語の合計点で降順ソートし、同点の場合は番号が小さい順にソート
  const remainingStudents2 = remainingStudents.slice(Y);
  remainingStudents2.sort((a, b) => (b.math + b.english) - (a.math + a.english) || a.index - b.index);

  // 合計点で上位 Z 人を合格
  passedStudents.push(...remainingStudents2.slice(0, Z));

  // 合格者の番号を小さい方から順に取り出して出力
  const result = passedStudents.map(student => student.index);
  const sortResult = result.sort((a, b) => a - b)
  // console.log(sortResult.join('\n'));
}

// 入力例
const N = 6;
const X = 1;
const Y = 0;
const Z = 2;
const scores = [
  { index: 1, math: 80, english: 40 },
  { index: 2, math: 60, english: 20 },
  { index: 3, math: 80, english: 50 },
  { index: 4, math: 60, english: 90 },
  { index: 5, math: 70, english: 90 },
  { index: 6, math: 70, english: 80 }
];

// 関数呼び出し
determinePassingOrder(N, X, Y, Z, scores);


const inputArray = [
  ['80', '60', '80', '60', '70', '70'],
  ['40', '20', '50', '90', '90', '80']
];

const scoress = inputArray[0].map((math, index) => {
  return {
    math: parseInt(math),
    english: parseInt(inputArray[1][index])
  };
});

// console.log(scoress);