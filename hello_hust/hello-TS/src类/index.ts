//使用class 关键字定义一个类
class Person{
    //定义属性
    /**
     * 直接定义的是实例属性，需要通过对象实例去访问
     * 
     * 使用static开头的属性是静态属性（类属性），可以直接通过类访问
     * 
     * readonly表示只读属性
     */
    readonly name:string = 'tom';
    static age:number = 18;
    sayHello(){
        console.log('hello');
    }
}
const per = new Person();

console.log(per.name);
// console.log(per.age);
Person.age=20;
console.log(Person.age);
per.sayHello();

class Dog{
    name:string;
    age:number;
    /**
     * 构造函数
     */
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    bark(){
        console.log('当前对象',this.name,this.age);
    }
}
const dog = new Dog('tom',12);
console.log(dog);
dog.bark();