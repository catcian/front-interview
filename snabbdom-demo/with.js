const obj = {a: 100, b: 200}

console.log(obj.a)
console.log(obj.b)
console.log(obj.c)// undefined

// 使用 with 能改变 {} 内 自由变量的查找方式
// 将{} 内自由变量，当做 obj 的属性来查找
with (obj) {
  console.log(a)
  console.log(b)
  console.log(c)// 会报错！！！
}

