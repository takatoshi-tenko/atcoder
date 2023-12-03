function Main(input) {
  const args = input.trim().split('\n')
  const result = args[1].slice(args[0] -1)
  console.log(result)
}
console.log(Main(`
1
q
`))