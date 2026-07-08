(function(){
    /**
     * 以abstract开头的是抽象类
     * 用于继承
     * 抽象类中可以添加抽象方法
     */
    abstract class Animal{
        name:string;
        constructor(name:string){
            this.name=name;
        }
        /**
         * 定义抽象方法
         * 用abstract开头
         * 抽象方法必须重写
         */
        abstract sayHello():void;
    }
    /**
     * 继承
     * Animal为父类，Dog为子类
     * 使用继承后，子类会拥有所有父类方法
     * 通过继承，将多个类共有的方法写在父类中
     */
    class Dog extends Animal{
        //如果子类中写了构造函数，在子类构造函数中，必须对父类构造函数调用
        age:number;
        constructor(name:string,age:number){
            super(name);
            this.age=age;
        }
        run(){
            console.log(`${this.name}在跑！`)
        }
        // 子类覆盖父类：方法的重写
        sayHello() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal{
        sayHello(): void {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('tom',12);
    console.log(dog);
    dog.sayHello();
    dog.run();
    const cat = new Cat('jack');
    console.log(cat);
    cat.sayHello();
})();