// 274

function Main(input) {
  const arg = input.trim().split('\n')
  const nums = arg[0].split(' ').map(BigInt)
  // console.log(arg)
  // console.log(nums)
  // console.log(nums[0])
  // console.log(nums[1])

  const culc = (nums[0] * nums[1] * nums[2]) - (nums[3] * nums[4] * nums[5])
  // console.log(culc)
  const result = culc % BigInt(998244353)
  console.log(result.toString())
}
console.log(Main('2 3 5 1 2 4'))
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'))


"use strict";

const main = (arg) => {
  const X = arg.trim().split(" ")[0];
  if (X === "Monday") {
    console.log(5);
  }
  if (X === "Tuesday") {
    console.log(4);
  }
  if (X === "Wednesday") {
    console.log(3);
  }
  if (X === "Thursday") {
    console.log(2);
  }
  if (X === "Friday") {
    console.log(1);
  }
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
