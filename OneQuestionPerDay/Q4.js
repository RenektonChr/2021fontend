/**
 * 统计一个数字在排好序的数组中出现的次数
 * 
 * 提示：本题有多种解法
 */

// 第一种：二分查找
// [1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 12, 12, 12];
const numCount = (arr, target) => {
  if(!arr.length || typeof target !== 'number') {
    throw new Error('参数错误')
  }

  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  let targetStartIndex = undefined;
  let targetEndIndex = undefined;

  let isStart = false;
  let isEnd = false;
  while(start <= end) {
    mid = Math.floor((start + end) / 2);
    if(arr[mid] === target) {
      targetStartIndex = mid;
      targetEndIndex = mid;
      break;
    }else if(arr[mid] > target){
      end = mid - 1;
    }else {
      start = mid + 1;
    }
  }

  while(arr[targetStartIndex] === target || arr[targetEndIndex] === target) {
    if(targetStartIndex > 0) {
      if(arr[targetStartIndex - 1] === target) {
        targetStartIndex = targetStartIndex - 1;
      }else {
        isStart = true;
      }
    }else {
      targetStartIndex = 0;
      isStart = true;
    }
    if(targetEndIndex < arr.length - 1) {
      if(arr[targetEndIndex + 1] === target) {
        targetEndIndex = targetEndIndex + 1;
      }else {
        isEnd = true;
      }
    }else {
      targetEndIndex = arr.length - 1;
      isEnd = true;
    }
    if(isStart && isEnd) break; 
  }
  return targetEndIndex - targetStartIndex + 1;
}

const list = [1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 12, 12, 12];
numCount(list, 12);

// 第二种暴力循环
const numCount2 = (arr, target) => {
  if(!arr.length || typeof target !== 'number') {
    throw new Error('参数错误')
  }
  return (arr.filter(item => item === target)).length
}

console.log(numCount2(list, 4))

// 第三种
