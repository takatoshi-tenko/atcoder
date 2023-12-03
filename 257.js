// A問題

function Main(input) {
  input = input.split('\n')
  const [N, X] = input[0].split(' ')
  const alphabet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  const alphabetUnit = alphabet[0].split('')
  let result = []
  for (let i = 0; i < alphabetUnit.length; i++) {
    for (let j = 0; j < N; j++) {
      result.push(alphabetUnit[i])
    }
  }
  console.log(result[X-1])
}

console.log(Main('2 12'))