/**
 * 输入一个整数，输出该数二进制表示中1的个数
 */
// num = 123

// 一般解法
function decimalToBinary(num) {
  if(typeof num !== 'number' || isNaN(num)) {
    throw new Error('请传入一个有效整数');
  }

  let targetNum = 0;
  const result = [];
  
  if(num == 0) {
    return 0;
  }
  if(num < 0) {
    targetNum = num >>> 0;
  }
  if(num > 0) {
    targetNum = num;
  }
  
  while(targetNum !== 0) {
    result.push(targetNum % 2);
    targetNum = Math.floor(targetNum / 2);
  }
  return result.filter(item => item === 1).length
}

// 最优解法
function numberOf1(n) {
  let flag = 1;
  let count = 0;
  while(flag) {
    if(flag & n) {
      count++;
    }
    flag = flag << 1;
  }
  return count;
}

console.log(decimalToBinary(3))
console.log(numberOf1(3))

console.log(decimalToBinary(-3))
console.log(numberOf1(-3))
