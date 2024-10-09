console.log('hello');
let a: number
a = 22
let b = true
// 元组
let h: [string, number]
h = ['hello', 123]

enum Gender {
  Male = 0,
  Female = 1
}
let i: { name: string, gender: Gender }
i = {
  name: 'hhj',
  gender: Gender.Male
}

export { }