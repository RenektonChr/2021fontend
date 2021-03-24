/**
 * 请从字符串中找出一个最长的不包含重复字符串的子字符串，计算该最长子字符串的长度。
 * 
 * 参考答案：
 * 在不考虑时间的情况下，直接暴力法对所有的子字符串进行检查。复杂度是O(n^3)。
 * 
 * 解法1：滑动窗口
 * 准备两个指针i、j，i指向窗口的左边，j指向右边。指针每次可以向前滑动一个位置，它们之间的区域就是“窗口”
 * 
 * 整体流程如下：
 * 
 * 1. 准备哈希表map。key是char，value是boolean，代表字符char是否出现在滑动窗口内
 * 2. i和j初始化为0， 结果ans初始化为0
 * 3. 检查s[i]是否出现过：
 *    没有出现过，扩大窗口：记录s[j]，指针j向右滑动一格，更新ans
 *    出现过，缩小窗口：指针i向右移动一格，map[s[i]]更新为false
 * 4. 如果 i 和 j 没有越界，回到step3，否则返回ans。
 */

/**
 * 
建立一个空字符串str，遍历原始字符串s每个位置的值s[i]
若str中不存在s[i]，str+=s[i]
若存在，滑动窗口，寻找str中s[i]的位置str.indexOf(s[i])，截取该位置之后的str部分，然后str+=s[i].
进行第三步时，需要取max(length, str.length) ，length为之前截取时记录的str.length的最大值。
最后返回最大值即可。
 */

function getStr(s) {
  let str = '';
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    if (str.indexOf(s[i]) == -1) {
      str += s[i]
    } else {
      length = Math.max(length, str.length);
      str = str.slice(str.indexOf(s[i]) + 1) + s[i];
    }
  }
  return Math.max(length, str.length);
}

console.log(getStr('abcabcbb'));
