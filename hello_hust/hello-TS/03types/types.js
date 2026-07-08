"use strict";
//object表示一个js对象
let a;
a = {};
a = function () { };
//{}用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值，...}
//属性名后面加上?表示属性是可选的
let b;
b = { name: 'Alice' };
//[propName:string]:any表示任意类型的属性
let c;
c = { name: '猪八戒', age: 10, gender: '男' };
//设置函数结构的类型声明
//语法：(形参:类型,形参:类型,...)=>返回值
let d;
d = function (n1, n2) {
    return n1 + n2;
};
/**
 * 数组的类型声明
 * 类型[]
 * Array<类型>
 */
//string[]表示字符串数组
let e;
e = ['a', 'b', 'c'];
//number[]表示数值数组
let f;
f = [1, 2, 3];
let g;
g = [1, 2, 3];
/**
 * 元组，元组就是固定长度的数组
 * 语法：[类型,类型,类型]
 */
let h;
h = ['hello', 10];
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let i;
i = {
    name: '孙悟空',
    gender: Gender.Female
};
// console.log(i.gender===Gender.Male); 
//&表示同时满足
let j;
j = { name: '猪八戒', age: 30 };
// let k:1|2|3|4|5;
// let l:1|2|3|4|5;
let k;
let l;
k = 2;
l = 4;
