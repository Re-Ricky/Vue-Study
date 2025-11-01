// 函数类型实际上指的是: 函数的参数及返回值的类型
// 语法:单独指定参数,返回值类型
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(10, 5));

let add2 = function (x: number, y: number): number {
    return x + y;
}
console.log(`----- add2: ${add2(1, 2)}`);

let add3 = (x: number, y:number): number => {
    return x + y;
}

console.log(`----- add2: ${add3(4, 5)}`);

// 可选参数: 在 TS 里我们可以在参数后使用 ? 实现可选参数的功能.而且可选参数只能出现在参数列表的最后
function getFullname(firstName: string, lastName? :string): string {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}

console.log(`---------- 可选参数 ${getFullname("renqiang", "li")}`);
console.log(`---------- 可选参数 ${getFullname("renqiang")}`);