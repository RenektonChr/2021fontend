/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 你可假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 1. 用哈希表，ES6的Map
 * 2. 摩尔投票
 * 3. 数组排序
 */

// 方法一：哈希
const getMajority = (numList) => {
  if(!Array.isArray(numList)) {
    throw TypeError('arguments must be a Array');
  }

  if(numList.length === 0) {
    return undefined;
  }

  const length = numList.length;
  const map = new Map();

  for(let i = 0; i < length; i++) {
    if(!map.has(numList[i])) {
      map.set(numList[i], 1);
    }else {
      map.set(numList[i], map.get(numList[i]) + 1); 
    }
    if(map.get(numList[i]) > Math.floor(length / 2) + 1) {
      return numList[i]
    }
  }
}

// 方法2：摩尔投票
const getMajority2 = (numList) => {
  if(!Array.isArray(numList)) {
    throw TypeError('arguments must be a Array');
  }

  if(numList.length === 0) {
    return undefined;
  }

  let result = 0;
  let times = 0;

  for(let i = 0; i < numList.length; i++) {
    if(times === 0) {
      result = numList[i]
      times+=1
    }else if(result !== numList[i]) {
      times += -1;
    }else if(result === numList[i]) {
      times += 1;
    }
    console.log('result--->', result);
  }

  return result;
}

const list = [3,5,3, 3, 3, 3, 3, 3, 3, 3, 3, 8,9,3,4,3,4,3,10];
console.log(getMajority2(list));
