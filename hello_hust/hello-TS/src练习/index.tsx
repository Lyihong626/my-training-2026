(function(){
    class Animal{
        name:string;
        age:number;

        constructor(name:string,age:number){
            this.name=name;
            this.age=age;
        }
        sayHello(){
            console.log('#####');
        }
    }
    /**
     * 继承
     * Animal为父类，Dog为子类
     * 使用继承后，子类会拥有所有父类方法
     * 通过继承，将多个类共有的方法写在父类中
     */
    class Dog extends Animal{
        run(){
            console.log(`${this.name}在跑！`)
        }
        // 子类覆盖父类：方法的重写
        sayHello() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal{}
    const dog = new Dog('tom',12);
    console.log(dog);
    dog.sayHello();
    dog.run();
    const cat = new Cat('jack',13);
    console.log(cat);
    cat.sayHello();
})();