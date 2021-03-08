/**
 * 题目要求：
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 
 * 示例：
 * [
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]
  target = 5 true
  target = 20 false
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 方法一：利用API解决
const findNumberIn2DArray1 = function(matrix, target) {
  // TODO
  return matrix.flat(Infinity).includes(target);
}
const arr = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
console.log(findNumberIn2DArray1(arr, 5));
console.log(findNumberIn2DArray1(arr, 20));

// 二分查找
const findNumberIn2DArray2 = (matrix, target) => {
  const isArray = Array.isArray(matrix);
  if(!isArray) throw TypeError('arguments 1 must be Array');
  const colLength = matrix.length;
  if(colLength === 0) return false;

  const rowLength = matrix[0].length;
  const sortCount = Math.min(colLength, rowLength);
  for(let i = 0; i < sortCount; i++) {
    const rowFound = binarySearchInRow(matrix, i, target);
    const colFound = binarySearchInCol(matrix, i, target);

    if(rowFound || colFound) {
      return true;
    }
  }

  return false;
}

const binarySearchInRow = (matrix, row, target) => {
  // 定义两个指针
  let lo = row;
  let hi = matrix[row].length - 1;

  while(lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if(matrix[row][mid] === target) {
      return true;
    } else if(matrix[row][mid] < target){
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
}

const binarySearchInCol = (matrix, col, target) => {
  let le = col;
  let hi = matrix.length - 1;

  while(le <= hi) {
    let mid = le + Math.floor((hi - le) / 2);
    if(matrix[mid][col] === target) {
      return true;
    } else if (matrix[mid][col] < target) {
      le = mid + 1;
    } else {
      le = mid - 1;
    }
  }
}

console.log(findNumberIn2DArray2(arr, 5))
console.log(findNumberIn2DArray2(arr, 20))
