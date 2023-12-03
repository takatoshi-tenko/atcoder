// let array = ['りんご', 'バナナ', 'オレンジ', 'ブドウ', 'みかん', 'メロン']
// for (let item of array) {
//   console.log(item)
// }

function Main(input) {
  const args = input.trim().split('\n')
  const [H, W] = args[0].split(' ').map(Number)
  const array = Array.from(Array(W), () => 0)
  const mainContent = args.slice(1)

  // 解説
  // hoge of mainContent：mainContentがある分だけhogeに代入される
  // hoge内をforでW回回す。
  // hoge[i]つまり、#..#一個一個を調査。#に該当したらあらかじめ用意してたarray[i]をカウントアップさせる
  // 最終的にjoin で繋げて終わり
  for (const hoge of mainContent) {
    for (let i = 0; i < W; i++) {
      if (hoge[i] === '#') {
        array[i]++
      }
    }
  }
  // console.log(array)
  // for (let i = 1; i <= H; i++) {
  //   for (let j = 1; j <= W; j++) {
  //     const arr = args[i].split('')
  //     array[i] += arr.map((v, i) => v === '#' ? i : '')
  //     console.log(array[i])
  //   }
  // }
  console.log(array.join(' '))
}
console.log(Main(`
5 47
.#..#..#####..#...#..#####..#...#...###...#####
.#.#...#.......#.#...#......##..#..#...#..#....
.##....#####....#....#####..#.#.#..#......#####
.#.#...#........#....#......#..##..#...#..#....
.#..#..#####....#....#####..#...#...###...#####
`))

a = ['りんご', 'バナナ', 'オレンジ', 'ブドウ', 'りんご', 'メロン']
b = a.map((v, i) => v === 'りんご' ? i : '').filter(String)
c = a.findIndex(val => val === 'りんご')
console.log(b)
console.log(c)