// 6-5 闭包 隐藏数据，只提供 api
function createCache () {
  const data = {}
  return {
    get: function (key) {
      return data[key]
    },
    set: function (key, value) {
      data[key] = value
    }
  }
}

const cache = createCache()
cache.set('a', 100)
const res = cache.get('a')
