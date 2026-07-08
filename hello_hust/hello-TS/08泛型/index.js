"use strict";
/**
 * 在定义函数或者类时，遇到遇到类型不明确就可以使用泛型
 */
function fn(a) {
    return a;
}
//可以直接调用具有泛型的函数
let result1 = fn(10);
console.log(result1);
let result2 = fn('hello');
console.log(result2);
function fn2(a, b) {
    console.log(b);
    return a;
}
console.log(fn2('qqq', 231));
//只要有 length 属性，不管是什么，都算实现了 Inter
// T extends Inter表示泛型T必须是Inter的实现类（子类）
function fn3(a) {
    return a.length;
}
console.log(fn3('asdfg'));
class Myclass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new Myclass('zxc');
