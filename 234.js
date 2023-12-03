// function test(n){
//   console.log('Hello');

//   if (n != 0) {
//     console.log('通った')
//     test(n - 1);
//   }

//   console.log('Bye');
// }

// test(2);

function Main(input) {
  // result = Main(Main((input ** 2 + input * 2 + 3) + input)) + Main(Main((input ** 2 + input * 2 + 3)))
  // f(t)
  const args = input.split('\n').map(Number)
  ft = args[0] ** 2 + args[0] * 2 + 3
  ftPlusT = ft + args[0]
  ftPlusTInF = ftPlusT ** 2 + ftPlusT * 2 + 3
  ftInF = ft ** 2 + ft * 2 + 3
  ftPlusTInFPlusftInfInf = (ftPlusTInF + ftInF) ** 2 + (ftPlusTInF + ftInF) * 2 + 3
  // console.log(ft)
  // console.log(ftPlusT)
  // console.log(ftPlusTInF)
  // console.log(ftInF)
  console.log(ftPlusTInFPlusftInfInf)
}
console.log(Main('10'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));