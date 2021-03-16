
/* 
自由变量
1. 一个变量在当前作用域没有定义，但被使用了
1. 向上级作用域，一层一层一次寻找，直至找到为止
1. 如果到全局作用域都没找到，则报错 xx is not defined
 */

// let a = 0
// function fn1 () {
//   let a1 = 100

//   function fn2 () {
//     let a2 = 200

//     function fn3() {
//       let a3 = 300
//       return a + a1 + a2 + a3
//     }
//     fn3()
//   }
//   fn2()
// }
// fn1()
/* 
闭包 closure.js
1. 作用域应用的特殊情况，有两种表现
1. 函数作为参数被传递
1. 函数作为返回值被返回
 */

// function create () {
//   let a = 100
//   return function () {
//     console.log(a)
//   }
// }
// let fn = create()
// const a = 200
// fn()// 100


function print (fn) {
  fn(a)
}
let a = 100
function fn (a) {
  console.log(a)
}
print(fn)// 100

// 闭包：自由变量的查找，是在函数定义的地方，向上级查找
// 不是在执行的地方！！！