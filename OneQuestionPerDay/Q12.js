/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0 ~ n-1之内。在范围
 * 0 ~ n-1之内的那个数字
 * 
 * 分析：
 * 利用二分查找，计算中间坐标mid：
 * 1. 如果mid === arr[mid]，说明[0,mid]范围内不缺数字，left更新为吗，mid + 1。
 * 2. 如果mid < arr[mid]，说明[mid, right]范围内不缺数字。right更新为mid - 1。
 * 3. 检查left是否小于等于mid，成立就继续迭代。
 * 4. 直到最后跳出循环返回left。
 */

function fun(arr) {
  if(!Array.isArray(arr)) {
    throw TypeError('参数必须为数组！');
  }
  
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;
  while(left <= right) {
    mid = Math.floor((left + right)/2);
    if(mid === arr[mid]) {
      left = mid + 1;
    }else if(mid < arr[mid]) {
      right = mid - 1;
    }
  }

  return left;
}

const arr = [0, 1, 2, 3, 4, 6];
console.log(fun(arr));
