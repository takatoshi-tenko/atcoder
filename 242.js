function Main(input) {
  const args = input.trim().split('\n')
  const [A, B, C, X] = args[0].split(' ').map(Number)
  //A: もらえる人 B: 抽選枠 C: 当たる人の数 X: イロハの順位
  let result = 0
  if (X <= A) {
    console.log(1)
  }
  if (X > A && X <= B) {
    result = C / (B - A)
    console.log(result)
  }
  if (X > B) {
    console.log(0)
  }
}
console.log(Main('30 500 20 103'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));