/**
 * 判断扑克牌是不是顺子
 * 从扑克牌中随机抽取5张牌，判断是不是一个顺子，即这 5 张牌是不是连续的。
 * 2 ~ 10为数字本身，A为1，J为11，Q为12，K为13，而大小王为0，可以看成任意数字。
 * A不能视为14。
 */

/**
 * 整体的算法流程：
 * 1. 首先应该对数组排序。
 * 2. 排除数组中的0，也就是大小王。
 * 3. 统计数组中所有相邻数之间的间隔。
 * 4. 同时还需要排除对子的情况，如果出现了对子那么肯定不可能是顺子（0除外）。
 * 5. 最后判断间隔值，如果大于等于4，说明可以组成顺子。
 */

function continuousNumber(numList) {
  if(!Array.isArray(numList)) {
    throw TypeError('参数应该为数组！');
  }
  if(numList.length !== 5) {
    throw Error('数组长度应该为5！');
  }
  // 数组从大到小排序
  numList.sort(function(a, b) { return a - b; });
  // 排除掉0
  let numListNotZero = numList.filter((item) => item !== 0);
  // 计算包含0的个数
  const zeroNum = numList.length - numListNotZero.length;
  // 计算需要多少个0（王）
  let dVal = 0;
  for(let i = 0; i < numListNotZero.length - 1; i++) {
    if( (numListNotZero[i + 1] - numListNotZero[i]) > 1 ) {
      dVal = dVal + numListNotZero[i + 1] - numListNotZero[i] - 1;
    }else if(numListNotZero[i + 1] - numListNotZero[i] === 0){
      return false;
    }
    if(dVal > zeroNum) {
      return false;
    }
  }
  return true;
}

let numList = [0, 4, 8, 7, 0];
console.log(continuousNumber(numList));
