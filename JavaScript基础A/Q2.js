/**
 * 简单版本
 */
this.a = 20;
function go() {
  console.log(this.a);
  this.a = 30;
}
go.prototype.a = 40;
var test = {
  a: 50,
  init: function(fn) {
    fn();
    console.log(this.a);
    return fn;
  }
};
console.log((new go()).a);
test.init(go);
var p = test.init(go);  
p();

// 答案：40 30 20 50 30 50 30
// 解题思路：this的指向问题   this.a的多次变化

console.log('*********************************')
/**
 * 加强版
 */
var num = 1;
function yideng() {
  "use strict";
  console.log(this.num++);
}
function yideng2() {
  console.log(++this.num);
}
(function() {
  "use strict";
  yideng2();
})();
// yideng();

// 答案：2 Cannot read property 'num' of undefined
// "use strict"：禁止this关键字指向全局对象

/**
 * 扩展题目
 */
console.log('*************扩展题目************');
function C1(name) {
  if(name) this.name = name;
}

function C2(name) {
  this.name = name;
}

function C3(name) {
  this.name = name || 'fe';
}
C1.prototype.name = "yideng";
C2.prototype.name = "lao";
C3.prototype.name = "yuan";
console.log((new C1().name) + (new C2().name) + (new C3().name));

// 答案：yidengundefinedfe
