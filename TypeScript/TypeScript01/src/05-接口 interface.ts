export {}

// 当一个对象类型被多次使用时,我们可以使用接口(interface)来描述对象的类型,来达到 复用 的目的
interface User {
    name: string;
    age: number;
    say?(): void;
}

let stu: User = {
    name: 'Rose',
    age: 18,
    say() {
        console.log(this.name + ' say Hello TS');
    }
}

stu.say?.();


