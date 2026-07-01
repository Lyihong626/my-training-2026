//声明变量a，同时指定它的类型为number
let a:number;

//a的类型设置为number，在以后的使用过程中a的值只能是number
a = 10; //正确
// a = 'hello'; //错误，不能将类型“string”分配给类型“number”
 
let b:string;
b = 'hello'; //正确
// b = 10; //错误，不能将类型“number”分配给类型“string”

let c:boolean = true; //声明变量c，并指定它的类型为boolean，同时赋值为true
let d = true; //声明变量d，并赋值为true，类型自动推断为boolean

function sum(a:number, b:number):number{
    return a+b;
}
console.log(sum(10, 20)); //正确

//可以直接使用字面量进行类型声明
let e:10;
e=10;
// e=11; //错误，不能将类型“11”分配给类型“10”
//可以使用 |  来表示多个类型的联合类型
let f:'male'|'female';
let g:boolean|number;

//any类型表示任意类型，一个变量设置为any类型后相当于对该变量关闭了TS的类型检测
//声明变量不指定类型，TS会自动推断为any类型
let h:any;
h=10;
h='hello';
h=true;

//h的类型是any，b的类型是string，但是不能将类型“any”分配给类型“string”
b=h;

let i:string;
i=h; //正确，any类型可以赋值给任意类型

//unknown类型表示未知类型的值,实际上是一个类型安全的any类型
//unknown类型的变量只能赋值给unknown类型和any类型的变量，不能赋值给其他类型的变量
let j:unknown;
j='hello';

if(typeof j === 'string'){
    i=j; //正确，j的类型是unknown，但是经过类型判断后，j的类型被缩小为string类型
}
//类型断言
let k:string = j as string; //将j的类型断言为string类型
k=<string>j; //将j的类型断言为string类型
function fn1(num:number){
    if(num>0){
        return 1;
    }
    return 0;
}
//void用来表示空，没有返回值
function fn2():void{}

//never 表示永远不会返回结果, 
function fn3():never{
    throw new Error('报错了');
}