// A問題

function Main(input) {
  const args = input.trim().split('\n')
  const [H, W] = args[0].split(' ').map(Number)
  const [R, C] = args[1].split(' ').map(Number)
  // result = 0
  // for (let i = 0; i < H; i++) {
  //   for (let j = 0; j < W; j++) {
  //     result += [i+1, j+1]
  //     console.log(i+1,j+1)
  //   }
  // }
  // console.log(result)
  if (H === 1 && W === 1) {
    console.log(0)
    return 
  }
  if (H === 1) {
    if (
      C === 1 ||
      C === W
    ) {
      console.log(1)
      return
    } else {
      console.log(2)
      return
    }
  }
  if (W === 1) {
    if (
      R === 1 ||
      R === H
    ) {
      console.log(1)
      return
    } else {
      console.log(2)
      return
    }
  }
  // i+1が1の時、i+1がHの時、j+1が1の時、j+1がWの時
  if (
    R === 1 ||
    R === H ||
    C === 1 ||
    C === W
  ) {
    if (
      // i+1が1 && j+1が1、i+1がH && j+1が1、i+1がH && j+1が1、i+1がH && j+1がW、
      R === 1 && C === 1 ||
      R === H && C === 1 ||
      R === 1 && C === W ||
      R === H && C === W
    ) {
      console.log(2)
      return
    }
    console.log(3)
    return
  } else {
    console.log(4)
    return
  }
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(Main(`
8 1
8 1
`))
