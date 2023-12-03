// function Main(input) {
//   const args = input.split('\n')
//   const num = args[0].split(' ')
//   const A = args[0].split(' ')[0]
//   const B = args[0].split(' ')[1]
//   const C = args[0].split(' ')[2]
//   const D = args[0].split(' ')[3]
//   const E = args[0].split(' ')[4]
//   let count = {}
//   for (let i = 0; i < num.length; i++) {
//     let element = num[i]
//     count[element] = count[element] ? count[element] + 1 : 1
//   }
//   const values = Object.values(count)
//   if (values.includes(3) && values.includes(2)) {
//     console.log('Yes')
//   } else {
//     console.log('No')
//   }
//   // console.log(count)
//   // console.log(Object.keys(count))
//   // console.log(Object.values(count))
// }
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
// console.log(Main('12 12 11 1 2'))

// let arr = [0, 1, 1, 1, 1, 1, 3, 3, 4, 5, 6, 7, 0]

// let count = {}

// for (let i = 0; i < arr.length; i++) {
//   let elm = arr[i]
//   console.log(`エルムは${elm}です`)
//   count[elm] = count[elm] ? count[elm] + 1 : 1
//   console.log(count[elm])
// }
// console.log(count)


// B問題

function Main(input) {
  const args = input.trim().split('\n')
  const N = args[0]
  const num = args[1].split(' ').map(Number)
  let t = N
  let ans = 0
  while (t >= 2) {
    t = num[t - 2]
    ans++
  }
  console.log(ans)
}

console.log(Main(`
10
1 2 3 4 5 6 7 8 9
`))