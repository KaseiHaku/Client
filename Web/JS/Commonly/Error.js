// function Error(){}
let error = new Error();            // JS 所有错误的接口
let error = new EvalError();        // 使用 eval(js) 执行 js 代码出错时的报错
let error = new RangeError();       // 当一个数值变量或参数的有效范围之外
let error = new ReferenceError();   // 引用无效
let error = new SyntaxError();      // 语法错误
let error = new TypeError();        // 变量或参数类型错误
let error = new URIError();         // encodeURI() or decodeURI() 两个方法的参数非法时
