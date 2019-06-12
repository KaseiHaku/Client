/************************************************** JavaScript 基础 ******************************************************************/
"use strict"; // 表示使用严格的代码编写模式

/*
1. CPU 能访问的只有内存，访问方式只有一种，那就是内存地址

2. 计算机语言里的地址：变量名、数组名、函数名、对象名   在编译过后都会映射成对应的内存地址，
    变量（即对应的内存）中存放了内存 address 那么这个变量就是指针，
    而引用呢，在编译过后直接映射成地址，而不是存地址
    指针和引用的区别：指针 = FFFFFFFF -> [ FFFFFFFF, "EEEEEEEE(内存地址)"]     引用 = EEEEEEEE -> [ EEEEEEEE, "存放的内容"]

3. 面向对象语言中的概念
    Identifier 标识符： 自身内存地址 + 所指对象的地址， 即 C 语言中的一级指针
    Object 对象： 自身内存地址 + 内容
    由于 JS 是完全面向对象的语言，所以 JS 中 变量名、数组名、函数名 都是标识符（即都是指针）
*/

/** todo JS 原型链及构造函数相关的知识点
 * JS 有两个原生实例： 
 *      Function == 所有函数实例的构造函数，Function 本身的构造函数为 Function 函数实例本身
 *      Object.prototype == 所有普通实例的原型， Object.prototype 本身的原型为 null，即 Object.prototype.__proto__ == null;
 * 1. 函数实例： 由 function 关键字创建出来的实例
 * 2. 普通实例： 由 new 关键字创建出来的实例
 * */
console.log(Function.constructor); // ƒ Function() { [native code] }
console.log(Function.prototype); // ƒ () { [native code] } 注意跟上面输出的差别
console.log(Function.__proto__); // ƒ () { [native code] }

console.log(Object.constructor); // ƒ Function() { [native code] }
console.log(Object.prototype);// {constructor: Object(), }
console.log(Object.__proto__);// ƒ () { [native code] }


/* todo function 关键字创建函数实例 */
var Func = function(){};
console.log(Func.constructor); // 输出 function Function(){}; 表示当前函数实例 Func 的构造函数; Function 实例是 JS 原生实例，是一开始就存在的，例如 function Object(){}
console.log(Func.constructor.constructor); // Function 函数实例，是 JS 原生实例，他的 constructor 还是自身
console.log(Func.__proto__); // function 关键字创建出来的函数实例，是特殊的实例，不存在该属性
console.log(Func.prototype); // function 关键字创建出来的函数实例的 prototype 属性表示：var ins = new Func(); 中 ins 普通实例的原型
console.log(Func.prototype.__proto__); // 这个表示 ins 原型的原型，为 Object.prototype
console.log(Func.prototype.constructor); // 输出 function Func(){}; 表示用当前函数实例 new 出来的实例的构造函数

/* todo new 关键字创建普通实例 */
var ins = new Func(); // 使用 new 关键字创建一个实例
console.log(ins.__proto__ === Func.prototype); // 输出 true
console.log(ins.constructor); // 输出 function Func(){}
console.log(ins.prototype); // new 关键字创建出来的普通实例，没有 prototype 属性



/**************************************************************** js 基本概念：begin **********************************************************************************/

/*
js 是完全面向对象的语言，语言里面的所有东西都是对象：

js 原生类：Object、Function、Array、String、Boolean、Number、Date、RegExp、Error、SyntaxError
js 内建类：Global、Math、Arguments                                              // 内建类是由原生类组合而成的类
js 宿主对象：window、navigator、screen、history、location、event、document        // 指由 js 运行宿主提供的对象，Web 的话就是浏览器提供的对象
js 自定义类：

js 中的继承就是用我梦寐以求的组合来实现的，不过 js 中一个函数就是一个类会让人有点费解
JavaScript中的类都是以函数的形式进行声明的。
    因为JavaScript中没有其他语言中类似class ClassName{ }形式的类声明，
    而是把函数当作类来使用，函数名就是类名，函数本身就是类的构造函数，
    并且可以使用new关键字来创建一个实例对象。
*/


/** todo Closure 闭包
 * 指的是函数可以使用函数之外定义的变量，相当于函数的环境变量，但是该环境变量是根据函数创建时的词法环境决定的。
 * 词法环境：就是代码环境，即函数创建语句所在的代码位置能访问到的所有变量
 * */



// 闭包（closure）,无论该函数被嵌套了多少层，闭包是由函数以及创建该函数的词法环境组合而成


// js 中 null 和 undefined 的区别：null 表示：当前标识符已经跟内存地址绑定，但内存中没有数据 [0000ffff, ""]   undefined 表示：当前这个标识符是什么鬼，我tm都没见过
// js 中除了基本类型，数组  对象  函数 都是传引用的
// js 中同名函数，后定义的会覆盖先定义的



/* js 创建一个类 */
    // 方式1：用类的类创建类
    var sayHi = new Function("argName1", "argName2", 'alert("Hello " + sName + sMessage);');

    // 方式2：直接定义一个类
    function Kasei(){
        this.prototype;            /* 默认存在，该字段保存的是 Kasei 这个类，父类的对象
                                 *（即 this.prototype = new Object();），该对象是所有用 Kasei 类创建的 kasei 对象共用的对象，相当于 java 中的静态字段
                                 */

        this.constructor;          /* 默认存在，该字段保存的是 创建该对象的类的引用 
                                 *（即：this.constructor = function(){}  function Kasei(){}  constructor 完全等价于 Kasei）
                                 * 调用 this.constructor() 相当于调用 Kasei()
                                 * */
        this.name = null;       /* 所有属性定义的时候都应该初始化，如果不知道初始化为什么就 = null */
        this.age = null;

        this.getName = function(){
            return this.name;
        }
        this.setName = function(name){
            this.name = name;
        }

        this.getAge = function(){
            return this.age;
        }
        this.setAge = function(age){
            this.age = age;
        }

        this.hello = function(){
            console.log("hello");
        }
    }

/* js 创建一个对象 */
    // 方式1：用类创建对象
    var kasei = new Kasei();

    // 方式2：直接用字面量创建一个对象
    var person = {

        name:"John", 
        lastName:"Doe",
        age:50, 
        cars:[1,4.9,"Nissan"],

        setName:function(name){     

            this.name = name;
            return 0;
        }
    }
    // 方式3： js 中的 pseudo-array 伪数组
    var standardPseudoArray = {
        0: "a",
        1: 2,
        2: "d",
        3: false,
        length: 3
    };
    var trueArray = Array.prototype.slice.call(standardPseudoArray); // 该方法能把 伪数组 转换成 真正的数组
    


/* js 中为一个对象添加属性和方法，但不能为类添加属性和方法 */
    kasei.wife = "Haku"; // 为一个对象添加属性，注意不是类
    kasei.getWife = function(){ // 为一个对象添加方法，注意：对其他对象，但是是同一个类创建的对象，该方法无效
        return kasei.wife;
    }



/* js 中访问对象的属性和方法 */
    xiaoming.name;
    xiaoming["age"]; // 访问对象的属性
    xiaoming.sayHi();  // 访问对象的方法

    for(var name in obj){  // js 获取类的所有属性和方法
        names+=name+": "+obj[name]+", ";    
    } 
/* js 中删除对象的属性和方法 */
    delete xiaoming.name; // 删除实例 xiaoming 的 name 属性

    
/*******************************************************************js 基本概念：end ***************************************************************************/


/* JS 输出 */
console.log("蛋疼"+params);     //写入到浏览器的控制台。
window.alert("蛋疼"+params);     //弹出警告框
    
    
// 创建对象， 变量命名规则：第一个字符必须是字母、下划线（_）或美元符号（$）
    var x;        //x = undefined
    var _x = null;    //表示变量为空
    var $x = 5;        //x 是数字
    var x = "str''ing";    //x 是字符串
    var x = 'str""ing';
    var x = "str\"ing";    //x 是字符串
    var x = 'str\'ing';
    var x = true;
    var myAry = new Array();
    var myAry = new Array(1, 2, 3, 4);
    var myAry = ["Saab","Volvo","BMW"];
        

//内嵌函数（嵌套类）:实际上，在 JavaScript 中，所有函数都能访问它们上一层的作用域。JavaScript 支持嵌套函数。嵌套函数可以访问上一层的函数变量。
    function add() {
    kasei = "haku";  // 因为当前函数局部变量中不存在 kasei，所以会从外层找，如果到顶层（window 实例）还没有，那么在 window 实例中添加一个属性 kasei，即全局变量 kasei      
        var counter = 0;
        function plus() {counter += 1;}
        plus();    
        return counter; 
    }
    
//自调用函数（匿名内部类）
    (function(arg_0){})(arg_1);//解释：前半部定义一个未命名的函数，然后最后的括号表示直接调用这个未命名函数,arg_1是实参，值传递给arg_0





//arguments对象
    function findMax() {

        var i, max = 0;
        for (i = 0; i < arguments.length; i++){
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    }
    var max = findMax(1, 123, 500, 115, 44, 88);

// switch
switch(param){
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log(0);
}


// js 循环
outer:
for(var i=0;;i++){
    inter:
    for(var j=0;;j++){
        break inter;
        break outer;
        continue inter;
        continue outer;
    }
}


// eval() 函数
    var stringTypeJsCode = "alert(true);"
    eval(stringTypeJsCode);     // 用法一： 执行字符串格式的 js 代码
    var jsonStr = '{"name":"kasei", "age": 22}';
    eval('(' + jsonStr + ')');  //用法二： 解析 JSON 字符串

/** JS 异常 *****************************************************/
try{
    throw {message: 'throw 不继承自 Error 对象的异常对象'};
    throw new Error('manually throw'); // 注意： try catch 能检查的是代码的非法性，如果代码合法，只是逻辑真假，那么用 if 语句
} catch(error){
    if(error instanceof ReferenceError){
        console.log('捕获引用异常');
    } else if(error instanceof Error){
        console.log('捕获所有异常对象，因为 Error 是所有异常的祖先');
        console.log('错误名称=' + error.name);
        console.log('错误信息=' + error.message);
        console.log('错误发生时的调用栈=' + error.stack);
    } else {
        console.log('捕获普通对象： '+error.aa);
    }
} finally {
    console.log('始终会执行这部分代码');
}

// 自定义异常
function KaseiError(message){
    this.name = 'KaseiError';
    this.message = message ;
    this.stack = (new Error()).stack;
}
KaseiError.prototype = Object.create(Error.prototype);
KaseiError.prototype.constructor = KaseiError;

    
/* JS 运算符 */    
var a = void(5+7); // void 是 JavaScript 中非常重要的关键字，该操作符表示：计算一个表达式，但是不管结果如何都返回 undefined
===     // 绝对等于（值和类型均相等）
!==     // 绝对不等于（值和类型有一个不相等，或两个都不相等）
typeof "John"                // 返回 string 
"attributeName" in obj      // 判断一个对象是否有这个属性
delete obj.attributeName    // 删除对象的一个属性
var person = null;           // 值为 null(空), 但类型为对象
var person = undefined;     // 值为 undefined, 类型为 undefined

var gg => 1=2;  // arrow 表达式，先执行箭头右边的代码，把执行结果给左边的变量

(x) => x + 6
相当于
function(x){
    return x + 6;
};

/* JS 代码触发 debug 当浏览器打断点无效时使用 */
debugger;


/************************************************** JavaScript 创建对象 ******************************************************************/
// 原始的方式
var Obj = new Object();
Obj.name = '"Haku"';
Obj.age = 22;
Obj.setName = function(name){
    this.name = name;
}

// 工厂方式
function createObj(name, age){
    var Obj = new Object;
    Obj.name = '"Haku"';
    Obj.age = 22;
    Obj.setName = setName;
    
    return Obj;    
}

function setName(name){
    this.name = name;
}

var obj1 = createObj('"Haku"', 22);
var obj2 = createObj("Miku", 16);

// 构造函数方式
function Obj(name, age){
    this.name = name;
    this.age = age;
    this.setName = function(name){
        this.name = name;
    }
}

var obj1 = new Obj('"Haku"', 22);
var obj2 = new Obj("Miku", 16);

// 原型方式
function Car() {
}

Car.prototype.color = "blue";
Car.prototype.doors = 4;
Car.prototype.mpg = 25;
Car.prototype.showColor = function() {
  alert(this.color);
};

var oCar1 = new Car();
var oCar2 = new Car();


// 混合的构造函数/原型方式
function Car(sColor,iDoors,iMpg) {
  this.color = sColor;
  this.doors = iDoors;
  this.mpg = iMpg;
  this.drivers = new Array("Mike","John");
}

Car.prototype.showColor = function() {
  alert(this.color);
};

var oCar1 = new Car("red",4,23);
var oCar2 = new Car("blue",3,25);

oCar1.drivers.push("Bill");

alert(oCar1.drivers);    //输出 "Mike,John,Bill"
alert(oCar2.drivers);    //输出 "Mike,John"


// 动态原型方法
function Car(sColor,iDoors,iMpg) {
    this.color = sColor;
    this.doors = iDoors;
    this.mpg = iMpg;
    this.drivers = new Array("Mike","John");
  
    if (typeof Car._initialized == "undefined") {
        Car.prototype.showColor = function() {
            alert(this.color);
        }
        
        // 采用字面量的形式，会出错，原因见下面
        Car.prototype = {
            showColor: function(){
                alert(this.color);
            }
        };
        
    };
    Car._initialized = true;
  }
}

// new 操作符执行的过程，下面两个运算是等价的，可以用来解释动态原型中不能使用字面量的原因
var car1 = new Car();
var car1 = function newOperator(){
    var obj = {};
    obj.__proto__ = Car.prototype;
    Car.call(obj);
    return obj;
}














            
