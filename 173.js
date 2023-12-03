function Main(input) {
  const args = input.trim().split('\n')
  const array = args.slice(1)
  let count = array.reduce((prev, current) => {
    prev[current] = (prev[current] || 0) + 1
    return prev
  }, {})
  console.log(count['AC'] ? 'AC x ' + count['AC'] : 'AC x ' + 0)
  console.log(count['WA'] ? 'WA x ' + count['WA'] : 'WA x ' + 0)
  console.log(count['TLE'] ? 'TLE x ' + count['TLE'] : 'TLE x ' + 0)
  console.log(count['RE'] ? 'RE x ' + count['RE'] : 'RE x ' + 0)
}
console.log(Main(`
6
AC
TLE
AC
AC
WA
TLE
`))


// { AC: 3, TLE: 2, WA: 1 }