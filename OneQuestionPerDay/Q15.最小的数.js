/**
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 */
let minNumber = function(nums) {
  const n = nums.length;
  if(n == 0) {
    return '';
  }

  let str_arr = [];
  // 把数组中的每个数字转成10进制的字符串
  for(const num of nums) {
    str_arr.push(num.toString(10));
  }
  // 自定义sort规则
  str_arr.sort((s1, s2) => {
    // 如果开头数字不同，则返回字符串首个字符相减
    if(s1.charAt(0) !== s2.charAt(0)) {
      return s1.charCodeAt(0) - s2.charCodeAt(0);
    }
    const temp1 = s1.concat(s2);
    const temp2 = s2.concat(s1);
    const n = s1.length + s2.length;
    let index = 0;

    while(index < n) {
      if(temp1.charAt(index) !== temp2.chart(index)) {
        return tmp1.charCodeAt(index) - tmp2.charCodeAt(index)
      }
      index++
    }

    return 0;
  })
}

