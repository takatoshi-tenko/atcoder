function Main(input) {
  const args = input.trim().split('\n')
  const [N, M, T] = args[0].split(' ').map(Number)
  let time = N
  let leave = 0
  for (let i = 0; i < M; i++) {
    const arrs = args[i+1].split(' ').map(Number)
    console.log(arrs)
    if (i === 0) {
      time -= arrs[0]
      // console.log(time, 1)
      if (time <= 0) { return  console.log(('No')) }
    } else {
      time -= (arrs[0] - leave)
      // console.log(arrs[0], 'fja')
      // console.log(arrs[0]-leave, 'aaaa')
      // console.log(time, 'else')
      if (time <= 0) { return  console.log(('No')) }
    }
    time += (arrs[1] - arrs[0])
    // console.log(time, 'hoge')
    leave = arrs[1]
    // console.log(leave, 'leave')
    if (time > N) {
      time = N
    }
    if (time <= 0) { return  console.log(('No')) }
    if (i+1 === M) {
      time -= (T - arrs[1])
      if (time <= 0) { return  console.log(('No')) }
    }
  }
  if (time > 0) {
    console.log('Yes')
  } else {
    console.log(('No'))
  }
}
console.log(Main(`
15 3 30
5 8
15 17
24 27
`))