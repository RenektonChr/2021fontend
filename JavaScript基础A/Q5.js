function yideng() {
  console.log(1);
}

(function() {
  if(false) {
    function yideng() {
      console.log(2);
    }
  }
  yideng();
})();

// yideng is not a function 现代浏览器会把函数提升成一个变量 所以yideng是一个undefined
// 2 IE 函数会提升
// 1 火狐认为函数提升不合理
