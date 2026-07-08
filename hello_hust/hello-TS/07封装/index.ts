(function(){
    class Person{
        /**
         * public修饰的属性在任意位置都能访问
         * private私有属性，私有属性只能在类内部访问
         * protect受包含的属性，只能在当前类的子类中访问
         */
        private _name:string;
        private _age:number;
        constructor(name:string,age:number){
            this._name=name;
            this._age=age;
        }
        //TS中设置getter方法
        get name(){
            return this._name;
        }
        get age(){
            return this._age;
        }
        set name(value:string){
            this._name=value;
        }
        set age(value:number){
            this._age=value;
        }
    }

    const per = new Person('tom',22);

    console.log(per);
    per.name='jack';
    per.age=11;
    console.log(per.name,per.age);

    class A{
        protected num:number;
        constructor(num:number){
            this.num=num;
        }
    }
    class B extends A{
        test(){
            console.log(this.num);
        }
        setB(value:number){
            this.num=value;
        }
    }
    const b = new B(123);
    // b.num=333;//不能访问
    b.setB(222);
    console.log(b);

    //可以直接将属性定义在构造函数中
    class C{
        constructor(public name:string,public age:number){

        }
    }
    const c = new C('aaa',111);
    console.log(c);


})();