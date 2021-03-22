/**
 * 1000个6位长度的纯数字验证码，数组形式输出（最简单的方法来做）
 */

// 方法一
function getRandomNum(Min,Max){
  return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}

function getRandomList(length) {
  let count = 0;
  let result = [];
  while(count < length) {
    result.push(getRandomNum(100000, 999999))
    count++;
  }

  return result;
}

const randomList = getRandomList(1000);

console.log(randomList);

// 方法二

