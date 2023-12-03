function Main(input) {
  const args = input.trim().split('\n')
  let array = args[1].split(' ').map(Number)
  // console.log(array)
  let manhattan = 0
  let euclid = 0
  let chebyshev = []
  let result = 0

  array.forEach(element => {
    manhattan += Math.abs(element)
  });

  array.forEach((element, i) => {
    euclid += Math.abs(element) ** 2
  })
  euclid = Math.sqrt(euclid)

  array.map(element => {
    chebyshev.push(Math.abs(element))
  })
  result = Math.max(...chebyshev)

  console.log(manhattan)
  console.log(euclid)
  console.log(result)
  // console.log(chebyshev)
}

console.log(Main(`
10
3 -1 -4 1 -5 9 2 -6 5 -3
`))