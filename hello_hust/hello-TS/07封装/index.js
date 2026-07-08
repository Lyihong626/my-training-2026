"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        //TS中设置getter方法
        get name() {
            return this._name;
        }
        get age() {
            return this._age;
        }
        set name(value) {
            this._name = value;
        }
        set age(value) {
            this._age = value;
        }
    }
    const per = new Person('tom', 22);
    console.log(per);
    per.name = 'jack';
    per.age = 11;
    console.log(per.name, per.age);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
        setB(value) {
            this.num = value;
        }
    }
    const b = new B(123);
    // b.num=333;//不能访问
    b.setB(222);
    console.log(b);
    //可以直接将属性定义在构造函数中
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('aaa', 111);
    console.log(c);
})();
