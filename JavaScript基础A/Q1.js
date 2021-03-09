/**
 * 1. 请写出弹出值，并解释为什么
 */
alert(a);
a();
var a = 3;
function a() {
  alert(10);
}
alert(a);
a = 6;
a();

//  以上的代码在解释器中的执行情况
var a;
function a() {
  alert(10);
}
alert(a);
a();
a = 3;
alert(a);
a = 6;
a();

// 加强版本
var x = 1,
y = 0,
z = 0;
function add(x) {
  return (x = x + 1);
}
y = add(x);
console.log(y); // 4
function add(x) {
  return (x = x + 3);
}
z = add(x);
console.log(z); // 4
