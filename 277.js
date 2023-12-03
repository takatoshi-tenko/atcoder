// B問題
// 1文字目の集合で被りがあればfalse
// 2文字目の集合で被りがあればfalse
// 列ごとの集合で被りがあればfalse

function Main(input) {
  const args = input.trim().split('\n')
  // console.log(args)
  const S = args.slice(1)
  // console.log(S)
  const one = ['H', 'D', 'C', 'S']
  const two = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
  let first = []
  let second = []
  let count = 0
  let countSecond = 0
  for (let i = 0; i < S.length; i++) {
    first += S[i].slice(0, 1)
    second += S[i].slice(1)
  }
  first = [...first]
  second = [...second]
  // a = first.filter((currentValue, index, array) => {
  //   return console.log(currentValue, index, array)
  // })
  // console.log('--------------------------------')
  // b = first.find((currentValue, index, array) => {
  //   return console.log(currentValue, index, array)
  // })
  // console.log('--------------------------------')
  for (let i = 0; i < first.length; i++) {
    if (one.includes(first[i])) {
      count++
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (two.includes(second[i])) {
      countSecond++
    }
  }
  const getDuplicateValues = ([...array]) => {
    return array.filter((value, index, self) => self.indexOf(value) === index && self.lastIndexOf(value) !== index);
  }
  // console.log(getDuplicateValues(S))
  // console.log(count, 'count')
  // console.log(countSecond, 'countSecond')
  if (
    count === first.length &&
    countSecond === second.length &&
    getDuplicateValues(S).length === 0
  ) {
    console.log('Yes')
  } else {
    console.log(('No'))
  }
  // console.log(count === first.length)
  // console.log(countSecond === second.length)
  // console.log(getDuplicateValues(S))
  // console.log(a)
  // console.log(b)
  // console.log(S)
  // console.log(S)
  // console.log(first)
  // console.log(second)
}
console.log(Main(`
5
00
AA
XX
YY
ZZ
`))


const inputs = input.trim().split('\n');
 
const [N, M] = inputs[0].split(' ').map(Number);
 
const arrs = Array.from(Array(N), () => []);
console.log(arrs)
 
for (let i = 1; i <= M; i++) {
  const arr = inputs[i].split(' ').map(Number);
  console.log(arr)
  console.log(arrs[arr[0] - 1].push(arr[1]))
  console.log(arrs[arr[1] - 1].push(arr[0]))
}
console.log(arrs)
 
arrs.forEach(arr => {
  console.log(arr.length, arr.sort((a, b) => a - b).join(' '));
});