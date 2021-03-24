console.log({} + []); // "[object Object]"
{} + [];
[] + {};
{} + {};
console.log([] == false);   // false
console.log({} == false);   // false
if([]) {
  console.log([] == false);   // false
}
("b" + "a" + + "a" + "a").toLocaleLowerCase();
0 == "0";
Boolean("0") == Boolean(0);
console.log(NaN == 0);
console.log(NaN <= 0);
console.log(null <= 0);
console.log(1 + null);
var a = {value: 1};
var b = {value: 2};
console.log(a <= b);

var obj = {};
var x = +obj.yideng?.name??'京程一灯';
console.log(x);

var yideng = "京程一灯";
console.log(typeof yideng);
console.log(yideng instanceof String);
