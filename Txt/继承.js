// JS实现继承的6种方式


function Animal(name){
    // 属性
    this.name = name || "beast"
    // 实例方法
    this.sleep = function(){
        console.log(this.name + ' is sleeping');
    }
}

// 原型方法 
Animal.prototype.eat = function(food){
    console.log(this.name + ' is eating ' + food);
}



function People(name,sex){
    this.name = name || "beast"
    this.sex = sex || 'man'

    this.speak = function(){
         console.log(this.name , this.sex +' is speaking');
    }
}



/**
 * 一.原型链继承  把父类的实例instance作为子类的原型
 */
function Cat(){
    this.name = 'cat'
}

Cat.prototype = new Animal() // ！！这里实现继承

// test --------------------
let pussy = new Cat()
// console.log(pussy.name);
// pussy.eat('fish');
// pussy.sleep();
console.log(pussy instanceof Animal);
console.log(pussy instanceof Cat);
console.log(pussy instanceof People);
// ----------------优点
// 1.非常纯粹的继承关系，实例是子类的实例，也是父类的实例
// 2.父类新增原型方法/原型属性，子类都能访问到
// 3.简单，易于实现
// --------------- 缺点
// 1.为子类添加方法的时候必须写在Cat.prototype = new Animal()之后
// 2.无法实现多继承！！
// 3.所有属性都是共享的，父亲修改之后，子类都会受影响
// 4.没有办法传参！！
/**
 * 二. 借用构造函数继承(伪造对象) 
 */
function Dog(name){
    Animal.call(this)  //这里继承
    People.apply(this,['','woman'])  // 还可以传参
    this.name = name || "Bruce"
}

// test --------------------
let puppy = new Dog()
console.log(puppy.name);
puppy.sleep()
puppy.speak()
// puppy.eat('肉')
console.log(puppy instanceof Animal);
console.log(puppy instanceof Dog);
// ---------------------------优点：
// 1.可以多继承
// 2.可以传参

// ---------------------------缺点：
// 1.只是子类的实例不是父类的实例，相当于把父类的代码拷到子类里面
// 2.只能继承构造函数内的属性和方法，父类构造函数的原型对象上的属性不能继承 比如不能调用puppy.eat()
// 3.所有的属性都是构造函数中运行的，没办法复用（原型模式，构造函数模式）

/**
 * 三.组合继承  也叫伪经典继承  fake Perfect succeed
 */

function Rat(name){
    Animal.call(this)
    this.name = name || 'Jerry'
}

Rat.prototype = new Animal()

let jerry = new Rat()
console.log(jerry.name);
jerry.eat('cheese')
console.log(jerry instanceof Rat);
console.log(jerry instanceof Animal);

// 上面的缺点都解决，但是 --------
// 还是有缺点的：1.父类的构造函数被调用了两次,影响性能
// Animal.call()x1 Rat.prototype = new Animal()x2
// 2.同名覆盖，比如访问name 的时候，可以访问Rat里面的name和Animal里面的name
  
// 创建对象的方式有三种：
// one -> 字符字面量方式 two -> 使用new运算符 three ->Object.create()  Rat.__proto__.Animal 但是这种方式是现代浏览器才支持的，我们只能通过一个跳板来实现继承
// 跳板 function F(){}  F.prototype = Animal; Rat = new F() 
/** 
 * 四、原型式继承，原型继承 (看书！！！)
 */
// 封装一个跳板 ------------
function object(o){
    function F(){}
    F.prototype = o
    return new F()
}
// 封装一个跳板 ------------  这个跳板相当于ES5的Object.create()
// let Fish = Object.create(Animal) 是一样的
let fish = object(new Animal())
fish.name = 'goldFish'
console.log(fish.name);
fish.sleep()

/**
 * 五、寄生式继承
 */

function createAnother(original){
    let clone = object(original)
    clone.neigh = function(){
        console.log('neighhhhhhhhh');
    }
    return clone
}

let horse = createAnother(new Animal())
horse.name = 'Wan Ma'
horse.eat('shit')

/**
 * 六、组合寄生式继承（完美继承）
 */
/**
 * 七、ES6
 */