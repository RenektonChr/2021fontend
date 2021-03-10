/** 考验基础 */
var regex = /yideng/g;
console.log(regex.test('yideng'));  // true
console.log(regex.test('yideng'));  // false
console.log(regex.test('yideng'));  // true
console.log(regex.test('yideng'));  // false

/**
 * lastIndex 这一属性用于匹配下次检索的开始位置，该属性可读写，exec() 或 test()方法可以改写这一属性,
 * 当找不到匹配内容时，lastIndex自动设置为0。
 */
