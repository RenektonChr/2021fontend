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
