"use strict";
//声明变量a，同时指定它的类型为number
let a;
//a的类型设置为number，在以后的使用过程中a的值只能是number
a = 10; //正确
// a = 'hello'; //错误，不能将类型“string”分配给类型“number”
let b;
b = 'hello'; //正确
// b = 10; //错误，不能将类型“number”分配给类型“string”
let c = true; //声明变量c，并指定它的类型为boolean，同时赋值为true
let d = true; //声明变量d，并赋值为true，类型自动推断为boolean
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20)); //正确
//可以直接使用字面量进行类型声明
let e;
e = 10;
// e=11; //错误，不能将类型“11”分配给类型“10”
//可以使用 |  来表示多个类型的联合类型
let f;
let g;
//any类型表示任意类型，一个变量设置为any类型后相当于对该变量关闭了TS的类型检测
//声明变量不指定类型，TS会自动推断为any类型
let h;
h = 10;
h = 'hello';
h = true;
