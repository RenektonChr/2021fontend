var length = 10;
function fn() {
  console.log(this.length);
}

var yideng = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]()
  }
};

yideng.method(fn, 1, 2)

// 10 2

// 解释：arguments[0]调用的时候  this指向arguments，length指的是参数的个数。
