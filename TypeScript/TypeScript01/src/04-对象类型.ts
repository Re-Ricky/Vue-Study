const stu: {
    name: string,
    age:number,
    say(): void
} = {
    name: 'Rose',
    age: 18,
    say() {
        console.log(this.name + ' say Hello to TS!')
    }
}

stu.say();