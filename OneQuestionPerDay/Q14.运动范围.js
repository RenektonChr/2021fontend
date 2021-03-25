/**
 * 地上有一个 m 行 n 列的方格，从坐标 [0,0] 到坐标 [m - 1, m - 1]。一个机器人从坐标[0, 0] 的格子开始移动，
 * 机器人每次可以向上下左右四个方向移动一个格子（不能移动到方格外），也不能进入行坐标和列坐标的每个数位之
 * 和大于 K 的格子。例如，当K等于18时，机器人能进入方格 [35, 37]，因为 3 + 5 + 3 + 7=18。但是不能进入
 * [35, 38]，因为3 + 5 + 3 + 8 = 19。请问该机器人能达到多少个格子。
 * 
 * 提示：
 * 
 * 1 <= n, m <= 100
 * 0 <= k <= 20
 */

/**
 * 题目分析可知利用广度优先遍历比较方便。
 * 
 * 具体：
 * 1. 位数之和的计算  （纯数学方式   取余  整除）
 * 2. 四周方向的遍历  （方向数组  反坐标系）
 * 3. 限制条件 （边界和k）
 * 4. 格子数的统计 （Set）
 */

// 位数之和的计算
function getSum(num) {
  let sum = 0;

  while(num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum
}

const movingCount = function(m, n, k) {
  // 定义方向数组
  const directionAry = [
    [-1, 0],  // 上
    [0, 1],   // 右
    [1, 0],   // 下
    [0, -1]   // 左
  ]

  // 已经走过的坐标
  let set = new Set(['0,0']);

  // 定义一个坐标队列
  let queue = [[0, 0]];

  while(queue.length) {
    // 移除队首坐标，不移除的话会出现死循环
    let [x, y] = queue.shift();

    // 四周遍历  利用方向数组
    for(let i = 0; i < directionAry.length; i++) {
      let offsetX = directionAry[i][0];
      let offsetY = directionAry[i][1];

      // 临界值的判断
      if(offsetX >= m || offsetY >= n || offsetX < 0 || offsetY < 0 || set.has(`${offsetX},${offsetY}`) || (getSum(offsetX) + getSum(offsetY)) > k) {
        continue;
      }

      // 只添加没有走过的
      set.add(`${offsetX},${offsetY}`);

      queue.push([offsetX, offsetY]);
    }
  }

  return set.size;
};

console.log(movingCount(3, 1 , 0));
