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
console.log((new go()).a);  // 
test.init(go);
var p = test.init(go);
p();
