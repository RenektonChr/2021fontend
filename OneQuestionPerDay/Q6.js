/**
 * 输入一个字符串，按字典序打印出字符串中字符的所有排列。
 * 例如输入字符串abc，则打印出由字符a, b, c所能排列出的所有字符串
 * abc，acb，bac，bca，cab，cba
 * 
 * 思路：
 * 
 * 使用回溯算法。
 * + 记录一个字符（temp）,用于存储当前需要进入排列的字符
 * + 记录一个字符串（current），用于记录当前已经排列好的字符
 * + 记录一个队列（queue），用于存储还未排列的字符
 * 
 * 1. 每次排列将temp添加到current。
 * 2. 如果queue为空，则本次排列完成，将current加入结果数组中，结束递归。如果queue不为空，说明还有未排列的字符
 */

//  抽象成数学中的排列组合
// 一个长度为n的字符串一共会有  n * (n-1) * n-2 ... * 1

var permutation = function(s) {
  const res = new Set()
  const isExict = {}
  function checkStr(current) {
      if(current.length === s.length) return res.add(current)
      for (let i = 0; i < s.length; i++) {
          if (isExict[i]) continue
          isExict[i] = true
          checkStr(current + s[i])
          isExict[i] = false
      }
  }
  checkStr('')
  return [...res]
};

console.log(permutation('abc'))
