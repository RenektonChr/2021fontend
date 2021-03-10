/**
 * 请用一句话算出0-100之间的学生的学生等级，90-100输出为1等生，80-90为2等生
 * */
const level = (score) => Math.floor((100 - score) / 10) + 1;
console.log(level(100))
console.log(level(95))
console.log(level(85))
console.log(level(75))
console.log(level(65))
