// 使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。
/**
 * 1. 创建一个空对象
 * 2. 链接到原型
 * 3. 绑定this值并执行
 * 4. 返回新对象
 */
function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  // 绑定this值，并执行
  const res = fn.apply(obj, args);

  return res instanceof Object ? res : obj;
}
