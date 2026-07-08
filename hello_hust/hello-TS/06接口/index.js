"use strict";
(function () {
    class Person {
        /**
         * public修饰的属性在任意位置都能访问
         * private私有属性，私有属性只能在类内部访问
         */
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getName() {
            return this.name;
        }
        getAge() {
            return this.age;
        }
        setName(value) {
            this.name = value;
        }
        setAge(value) {
            this.age = value;
        }
    }
    const per = new Person('tom', 22);
    console.log(per);
    per.setName('jack');
    per.setAge(11);
    console.log(per);
})();
