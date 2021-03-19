/**
 * 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。
 * 
 * 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。
 * 
 * 1 <= n <= 11
 */

const dicesProbability = function(n) {
  // n = 1
  let dp = [1/6, 1/6, 1/6, 1/6, 1/6, 1/6];
  // n >= 1
  // 投递次数
  for(let i = 2; i <= n; i++) {
    const temp = [];
    // 第n个骰子有六种可能
    for(let j = 1; j <=6; j++) {
      // 在前n-1次的概率基础上进行运算
      for(let k = 0; k < dp.length; k++) {
        let index = j + k - 1;
        temp[index] ? temp[index] += dp[k] * 1/6 : temp[index] = dp[k] * 1/6
      }
    }
    dp = temp
  }
}
