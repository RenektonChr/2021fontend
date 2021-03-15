/**
 * 1. apply是Function构造函数原型上的一个方法
 * 2. 直接执行函数
 * 3. 绑定函数的this
 */
Function.prototype.mycall = function(context) {
  if(typeof this !== 'function') {
    throw TypeError('error');
  }

  const arg = [...arguments].slice(1);
  const fn = Symbol('fn');
  fn = this;
  context = context || window;
  context[fn] = this;
  // 执行函数
  const result = context[fn](...arg);
  // 删除属性
  delete context[fn];
  return result;
}
