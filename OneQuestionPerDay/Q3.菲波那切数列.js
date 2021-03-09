// 要求输入一个整数n，输出斐波那契数列的第n项。

// 方法一：普通递归
function fibonacci(n) {
  if (n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// 方法二：普通循环
function fibonacci_iteration(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // 初始化斐波那契数列 
  let fibonacciList = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacciList[i] = fibonacciList[i - 1] + fibonacciList[i - 2];
  }

  return fibonacciList[n];
}

// 方法三：动态规划（最佳算法）
/**
 * 基本原理：以斐波那契数列性质f(n + 1) = f(n) + f(n − 1) 为转移方程
 * + 状态定义：设dp为一维数组，其中dp[i]的值代表斐波那契数列的第i个数字。
 * + 转移方程：dp[i + 1] = dp[i] + dp[i-1]，即转移方程为f(n + 1) = f(n) + f(n - 1)
 * + 初始状态：dp[0] = 0, dp[1] = 1，即初始化前两个数字。
 * + 返回值：dp[n]，斐波那契数列的第n个数字。
 */
function fibonacci_best(n) {
  let fibonacciList = new Array(2).fill(0);
  fibonacciList[0] = 0;
  fibonacciList[1] = 1;
  for(let i = 2; i <= n; i++) {
    fibonacciList[i % 2] = fibonacciList[0] + fibonacciList[1];
  }
  return fibonacciList[n % 2];
}

function fibonacci_best2(n) {
  if(n < 2) { return n }

  let i = 2;
  let current = 1
  let pre = 1
  let result = 0;
  while(i <= n) {
    result = current + pre;
    pre = current;
    current = result;
    i++;
  }
  return result;
}

console.log(fibonacci_best2(0),fibonacci_best2(1),fibonacci_best2(2),fibonacci_best2(3),fibonacci_best2(4),fibonacci_best2(5));
