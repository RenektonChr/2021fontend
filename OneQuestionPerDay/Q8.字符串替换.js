/**
 * 请实现一个函数，将一个字符串中的每个空格替换成 "%20"。
 * 例如：当字符串为："We Are Happy"，则替换后的字符串为
 * We%20Are%20Happy
 */

function replaceStr(str) {
  let result = "";
  for(let i = 0; i < str.length; i++) {
    if(str[i] === ' ') {
      result = result + '%20'
    }else {
      result = result + str[i]
    }
  }

  return result;
}

console.log(replaceStr('We Are Happy'))
