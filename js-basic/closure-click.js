// 错误写法！！！
// var i, a
// for (i=0; i<10; i++) {
//   a = document.createElement('a')
//   a.innerHTML = i + '<br />'
//   a.addEventListener('click', function (e) {
//     e.preventDefault()
//     alert(i)
//   })
//   document.body.appendChild(a)
// }
/* 思路
for 循环很快执行完，什么时候执行 click，无法确定？
可能执行完的 1s 、或者 2s。
当点击的时候，alert(i) 此时的 i 是自由变量。要去父作用域查找，i 早已为成 10 
 */


// 通过函数进行包裹，函数作用域
// 自执行函数，就是不用调用，只要定义完成，立即执行函数
// var i
// for (i=0; i<10; i++){
//   (function (i) {
        // 函数作用域
//     var a = document.createElement('a')
//     a.innerHTML = i + '<br />'
//     a.addEventListener('click', function (e) {
//       e.preventDefault()
//       alert(i)
//     })
//     document.body.appendChild(a)
//   })(i)
// }


// 闭包实际应用中，主要用于封装变量，收敛权限
function isFirstLoad () {
  const _list = []
  return function (id) {
    if (_list.indexOf(id) >= 0) {
      // 存在
      return false
    } else {
      _list.push(id)
      return true
    }
  }
}

const firstLoad = isFirstLoad()
const res1 = firstLoad(10)
const res2 = firstLoad(10)
const res3 = firstLoad(20)


// 闭包的影响：
// 变量会常驻内存，得不到释放，影响性能，闭包不要乱用

