function Main(input) {
  const args = input.split('\n')
  const [X, K] = args[0].split(' ').map(Number)
  let result = X
  for (let i = 1; i <= K; i++) {
    result = Math.round(result / 10 ** i) * 10 ** i
  }
  console.log(result)
}

console.log(Main('314159265358979 12'))

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// a = Math.pow(2,3)
// console.log(a)

// number = 12345

// const result = Math.round(number / 1) * 1
// console.log(result)