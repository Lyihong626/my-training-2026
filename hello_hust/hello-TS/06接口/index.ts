
(function(){

    //描述一个对象的类型
    type myType={
        name:string,
        age:number
    };
    /**
     * 接口用来定义一个类的结构
     * 用来定义一个类中应该包含哪些属性和方法
     * 同时接口也可以当成类声明去使用
     */
    interface myInterface{
        name:string;
        age:number;
    }
    interface myInterface{
        gender:string;
    }
    const obj:myInterface = {
        name:'sss',
        age:111,
        gender:'nan'
    }
    console.log(obj);

    /**
     * 接口可以在定义类的时候去限制类的结构
     * 接口中的所有属性都不能有实际值
     * 接口中只定义对象的结构，而不考虑实际值
     *  在接口中的所有方法都是抽象方法
     */
    interface myInter{
        name:string;
        sayHello():void;
    }
    /**
     * 定义类时，可以使用类取实现一个接口
     * 实现接口就是满足接口的要求
     */
    class Myclass implements myInter{
        name:string;
        constructor(name:string){
            this.name=name;
        }
        sayHello(){
            console.log('good');
        }
    }

})();