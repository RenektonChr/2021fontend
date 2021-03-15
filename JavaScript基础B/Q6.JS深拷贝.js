/**
 * 手动实现深拷贝
 * deepClone
 * 接收一个对象，返回这个对象的副本
 */
function deepClone(source) {
  let res = Array.isArray(source) ? [] : {};
  for(let key in source) {
    if(typeof source[key] === 'object') {
      res[key] = deepClone(source[key]);
    }else {
      res[key] = source[key]
    }
  }
  return res;
}

let obj = {
  a: 2,
  b: 1,
  c: {
    d: 2,
    a: 1,
  },
  d: {
    c: 5,
    e: 6,
    f: {
      a: 1,
      b: 2
    }
  }
}

console.log(deepClone(obj));
