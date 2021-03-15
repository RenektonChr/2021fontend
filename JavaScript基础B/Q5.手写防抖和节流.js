// 定时器版本的函数防抖
function Debouncing(fun, delay) {
  let timer = null;
  return function() {
    const args = Array.from(arguments);
    const _this = this;
    if(timer) {
      timer = clearTimeout(timer)
    }
    timer = setTimeout(function() {
      fun.apply(_this, [...args]);
    }, delay);
  }
}

//  节流，一段时间内函数只执行一次

// 使用时间戳实现，比较好理解。
function throttle_Date(func, delay) {
  // 初始化timer
  const pre = 0;
  let _this, args;
  return function() {
    // 保存上下文执行环境，与参数列表
    _this = this;
    args = Array.from(arguments);
    let now = Number(new Date());
    
    if(now - pre > delay) {
      func.apply(_this, args);
      pre = new Date();
    }
  }
}

// 节流  定时器版本
function throttle_STO(func, delay) {
  let timer = null;

  return function() {
    const _this = this;
    const args = Array.from(arguments);

    if(!timer) {
      timer = setTimeout(function() {
        timer = null;
        func.apply(_this, args);
      }, delay)
    }
  }
}
