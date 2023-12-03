function Main(input) {
  const args = input.split('\n')
  const num = args[0].split(' ').map(Number)
  let result = 0
  let currentNum = 0
    // 1回ボタンを押す
      // num[0]の値を取得
      currentNum = num[0]
    // 2回ボタンを押す
      // 1回目で取得した値のindex-1を取得
      currentNum = num[currentNum]
    // 3回ボタンを押す
      // 2回目で取得した値のindex-1を取得
      result = num[currentNum]
      console.log(result)
}
console.log(Main('4 8 8 8 0 8 8 8 8 8'))