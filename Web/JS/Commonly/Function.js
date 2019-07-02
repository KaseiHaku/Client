/** todo JS 函数使用方式总结 ***/
    
    /** 函数使用方式一：函数调用 */
    function beCalled(){
        console.log(this); // 严格模式下为：this === undefined; 不严格模式下为：this === window;
        return 3;
    }
    beCalled();  // 函数调用
    
    
    /** 函数使用方式二：方法调用 */
    var obj = {
        beCalled: function(){
            console.log(this); 
            return 3;
        }
    };
    obj.beCalled();  // 方法调用
    
        
    /** 函数使用方式三：构造器调用 */
    function constructorCall(a){
        this.a = a;
        return {}; // 构造函数显示的返回对象
    }
    var obj = new constructorCall('aa'); // 构造器调用
    
    
    /** 函数使用方式四：间接调用
     * call()和apply()方法可以用来间接地调用函数，这两个方法都允许显式指定调用所需的 this 值，也就是说
     * 任何函数可以作为任何对象的方法来调用，哪怕这个函数不是那个对象的方法 
     * bind() 方法也可
     * */
    function indirectCall(x, y){
    
    }
    var obj = {};
    indirectCall.call(obj, x, y); // 间接调用，
    indirectCall.apply(obj, [x, y]);
    let bindedFunc = indirectCall.bind(obj); // bind 返回一个函数备用

    


    /** todo JS 命名函数、匿名函数、箭头函数的区别
     * 命名函数：在函数定义的时候就绑定了函数的执行环境（Context），执行环境可以被 call() apply() bind()  let newFun = namedFunc; 改变
     * 匿名函数：在函数运行时才绑定函数的执行环境，相当于 let newFun = function(){}; 绑定的时机在 newFun(); 的时候
     * 箭头函数：在函数定义时绑定的是父级语法环境中的 this，如果父级 this 改变，那么箭头函数的 this 随之改变
     * */
    





    
