/** todo Keyword */
    break case catch continue default delete do else finally for function if in instanceof 
    new return switch this throw try typeof var void while with
/** todo Reserved word */  
    
/** todo Variable: let, const, class 声明的变量不再是 window 对象的属性 */
    const PI = 3.1415926; // 声明一个 const 常量，对值类型，不能改变值；对引用类型，不能改变引用地址
    const [a, b, c] = [1, 2, 3]; // 采用解构的方式声明多个 const 变量
        
        
    const b = `foo${a}bar`;  // ES6 中所有字符串都是用 ` 反引号
    function func(){}  // 声明一个 function 变量
    let var3 = 'abc', var4 = 45.6; // let 命令声明的变量，只在 let 命令所在的代码块内有效；let 变量必须先声明后使用，且不允许重复声明
    
    import aa;
    class Kasei;
        
    /** 暂时性死区 */
        /* todo 案例一 */
        var tmp = 123;
        if (true) {
          tmp = 'abc'; // ReferenceError，因为 let 命令使 tmp 变量绑定到当前语句块，并且 let 变量必须先声明后使用，所以报错
          let tmp;
        }
        /* todo 案例二 */
        function bar(x = y, y = 2) {
          return [x, y];
        }
        bar(); // 报错，因为函数参数默认是 let 变量，并在出现时声明，y 在 x 变量之后出现，如果反过来就不报错了

/** todo Destructuring: 如果解构不成功，变量的值就等于 undefined */    
    /** 数组解构 */
    let [foo, [[bar], baz]] = [1, [[2], 3]]; // foo=1; bar=2; baz=3
    let [ , , third = 'defaultValue'] = ["foo", "bar", "baz"]; // third="baz"; 解构使用默认值，如果右边不是 === 全等于 undefined，那么默认值不生效
    let [x, , y] = [1, 2, 3]; // x=1; y=3
    let [head, ...tail] = [1, 2, 3, 4]; // head=1; tail=[2,3,4]
    let [x, y, ...z] = ['a']; // x='a'; y=undefined; z=[]
    let [foo] = NaN; // 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错

    /** 对象解构 */
    ({ foo: tty = 'defaultValue', bar: bar } = { foo: "aaa", bar: "bbb" }); // 单单解构
    let { foo: tty, bar: bar } = { foo: "aaa", bar: "bbb" };  // 解构的同时声明变量； tty 才是解构出来的变量，这种形式用于解构出来的变量名和对象字段名不一致的情况
    
    /** 数组解构成对象 */
    var arr = [1, 2, 3];
    var {0 : first, [arr.length - 1] : last} = arr; // first=1; last=3;
    /** 字符串解构成数组 */
    const [a, b, c] = '123'; // a='1'; b='2'; c='3'
    /** 字符串解构成对象 */
    let {length : len} = 'hello'; // len=5;
    /** 数值和布尔值的解构赋值: 解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象，数值和布尔值都有对应的包装对象，跟 java 中的包装类类似 */
    let {toString: s} = 123;
    s === Number.prototype.toString // true

    let {toString: s} = true;
    s === Boolean.prototype.toString // true
    /** 函数参数解构 */
    // 例1
    function add([x, y]){
      return x + y;
    }
    add([1, 2]); // 3

    // 例2
    [[1, 2], [3, 4]].map(([a, b]) => a + b); // [ 3, 7 ]

    // 例3
    function move({x = 0, y = 0} = {}) {
      return [x, y];
    }
    move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, 0]
    move({}); // [0, 0]
    move(); // [0, 0]

    // 例4
    function move({x, y} = { x: 0, y: 0 }) {
      return [x, y];
    }
    move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, undefined]
    move({}); // [undefined, undefined]
    move(); // [0, 0]

    /** 解构中的 小括号() 问题：原则：不能在模式中使用 () ,只能使用在变量上 */

/** todo JS 中表示一个字符 */ 
    '\z' === 'z'  // true
    '\172' === 'z' // true
    '\x7A' === 'z' // true
    '\u007A' === 'z' // true
    '\u{7A}' === 'z' // true

/** todo 程序走向 */ 
    var map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');
    for (let [key, value] of map) {
      console.log(key + " is " + value);
    }
    // first is hello
    // second is world




