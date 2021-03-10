Object.prototype.c = '京程一灯';
var ydObj = {};
Object.defineProperty(ydObj, 'a', {
  enumerable: true,
  value: 2
});
Object.defineProperty(ydObj, 'b', {
  enumerable: false,
  value: 3
});
console.log(Object.keys(ydObj));  // ['b']
console.log(Object.getOwnPropertyNames(ydObj)); // ['a', 'b']
console.log(4 in [2, 4, 6]);  // true  数组验证的是下标  对象验证的是key
console.log('c' in ydObj); // false
console.log(ydObj.hasOwnProperty('c')); // false

// 仔细思考一下下面的题目
var ydObj2 = {};
ydObj2.c = 3;
console.log(ydObj.c); // 京程一灯
