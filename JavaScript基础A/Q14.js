// 写屏蔽

Object.prototype.c = '京程一灯';
var ydObj = {
  c: 2
};
var myObj = Object.create(ydObj);
console.log(ydObj.hasOwnProperty('c')); // true
console.log(myObj.hasOwnProperty('c')); // true
myObj.a++;
console.log(ydObj.c); // 2
