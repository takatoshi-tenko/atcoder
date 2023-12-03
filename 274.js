function Main(input) {
  const row = input.trim().split('\n')
  // const point = row[0].split('')
  const Height = parseInt(row[0].split(' ')[0], 10)
  const Width = parseInt(row[0].split(' ')[1], 10)
  // console.log(point[0])
  // console.log(point[1])

  let rowAnswer = [1, 2, 3, 4] //ここに正解の数字を格納していく
  rowAnswer.unshift(Height)
  // rowAnswer.fill(0)
  console.log(rowAnswer[0])
  for (let i = 0; i < Height.length; i++) {
    for (let j = 0; j < Width.length; j++) {
      let point = row[i].split('')
      if (point[i][j] == '#') {
        rowAnswer[j] =+ 1
      }
      return rowAnswer
    }
  }
  console.log(rowAnswer)
}

console.log(Main(`
3 4
#..#
.#.#
.#.#
`))