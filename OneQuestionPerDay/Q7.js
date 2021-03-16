/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个数组的旋转，输出旋转数组的最小元素。
 * 例如数组 [ 3, 4, 5, 1, 2 ]，为 [ 1, 2, 3, 4, 5 ]的一个旋转，该数组的最小值为1。
 * 
 * NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */

function getMinNum(array) {
  if(!Array.isArray(array)) {
    throw TypeError('array is not Array');
  }
  if(array.length === 0) {
    return 0;
  }

  let start = 0;
  let end = array.length - 1;
  let mid = 0;

  while(true) {
    mid = Math.floor((start + end)/2);

    if(array[mid] > array[end]) {
      start = mid + 1
    }else if(array[mid] < array[end]) {
      end = mid;
    }else if(array[mid] === array[end]) {
      end = end - 1;
    }

    if(Math.abs(start - end) <= 1) {
      break;
    }
  }

  return array[start] > array[end] ? array[end]: array[start];
}

let arr = [ 3, 4, 5, 6, 1, 2, 2, 2, 2, 2, 3];

console.log(getMinNum(arr));
