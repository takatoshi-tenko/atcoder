// const array = ['2 10', '3 15', '4 89']
// const A = [5, 7, 5]

// let firstNum = []
// let secondNum = []

// for (let i = 0; i < array.length; i++) {
//   firstNum[i] = parseInt(array[i].split(' ')[0], 10)
//   secondNum[i] =parseInt(array[i].split(' ')[1], 10)
//   // firstNumの数字がループ処理中に該当する時に、その該当したfirstNumのsecondNumを出力する。
//   if (firstNum.includes(i+1)) {
//     console.log('呼ばれた')
//     find = firstNum.indexOf(i+1) // 0
//     console.log(secondNum[find])
//     console.log(firstNum[i])
//     console.log(secondNum[i])
//   }
// }

const selected = Array(47).fill(false)

// console.log(selected)

// 元の配列をコピーする
// const selected_copy = selected.slice();

// selected_copy[10] = !selected_copy[10];

// console.log(selected_copy)

// const fukuoka = [
//   { year: 1960, value: 1000000 },
//   { year: 1965, value: 2000000 },
//   { year: 1970, value: 3000000 },
// ]
// const saga = [
//   { year: 1960, value: 4000000 },
//   { year: 1965, value: 5000000 },
//   { year: 1970, value: 6000000 },
// ]
// const nagasaki = [
//   { year: 1960, value: 7000000 },
//   { year: 1965, value: 8000000 },
//   { year: 1970, value: 9000000 },
// ]

// [
//   {
//     name: "fukuoka",
//     data: [1000000, 2000000, 3000000],
//   },
//   {
//     name: "saga",
//     data: [4000000, 5000000, 6000000],
//   },
//   {
//     name: "nagasaki",
//     data: [7000000, 8000000, 9000000],
//   }
// ]


// const valuesArray = array.map(item => item.value)
// console.log(valuesArray)

// const app = {
//   name: 'tenko',
//   age: 26,
//   content: [
//     { year: 2020, value: 1237984 },
//     { year: 2025, value: 1157332 },
//     { year: 2030, value: 1076393 },
//     { year: 2035, value: 993737 },
//     { year: 2040, value: 908974 },
//     { year: 2045, value: 823610 }
//   ]
// }
// const { content } = app
// console.log(content.note)


// const cityData = [fukuoka, saga, nagasaki];

// const result = cityData.map((data) => {
//   const name = Object.keys({data})[0];
//   const values = data.map((item) => item.value);
//   return { name, data: values };
// });

// console.log(result);


const tokyo = [
  { year: 1960, value: 1000000 },
  { year: 1965, value: 2000000 },
  { year: 1970, value: 3000000 },
]
const chiba = [
  { year: 1960, value: 4000000 },
  { year: 1965, value: 5000000 },
  { year: 1970, value: 6000000 },
]
const saitama = [
  { year: 1960, value: 7000000 },
  { year: 1965, value: 8000000 },
  { year: 1970, value: 9000000 },
]

// 上記のデータがあった時、下記のobjの変数の形にデータを整形したい。

const obj = {
  test: [
    { name: "test", data: [0, 1, 2, 3, 4, 5], type: "good" }
  ]
}
// このobj内のデータにtokyo, chiba, saitamaのデータを適用させると下記のようなobj2が完成される。

// const obj2 = {
//   test: [
//     { name: "tokyo", data: [1000000, 2000000, 3000000], type: "good" },
//     { name: "chiba", data: [4000000, 5000000, 6000000], type: "good" },
//     { name: "saitama", data: [7000000, 8000000, 9000000], type: "good" }
//   ]
// }

// この時、tokyo, chiba, saitama はそれぞれ自由に選択できるとした場合、JavaScriptでどのように実装すればこれらの要件を満たせる実装ができるか教えてください。

// const obj2 = {
//   test: [
//     ...[...tokyo, ...chiba, ...saitama].map(area => {
//       return {
//         name: area.name,
//         data: area.data.map(d => d.value),
//         type: "good"
//       };
//     })
//   ]
// };
// console.log(obj2)

// console.log(...[...saitama])
// console.log(...saitama)
// console.log([...tokyo, ...chiba, ...saitama])
// console.log(...[...tokyo, ...chiba, ...saitama])

const data = [
  {name: "ten", age: 20},
  {name: "ten", age: 2222},
  {name: "ten", age: 2222},
  {name: "ten", age: 2222},
  {name: "ten", age: 2222},
]

const result = []

let a = data.map((i) => result.push(i.age))

console.log(a, 'a')

