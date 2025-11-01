// 联合类型：是指由两个或多个其他类型组成的类型，表示可以是其中的任意一种
// 写法： 类型1 | 类型2
let arr1: (string | number)[] = ['A', 'B', 'C', 1, 5, 10];
console.log(arr1);

let flag:(boolean|number) = true;
console.log(flag)
flag = 0;
console.log(flag)