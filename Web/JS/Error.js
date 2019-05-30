/** todo 捕获 代码异常 及 资源加载异常 */
window.addEventListener('error', function(message, source, lineno, colno, error){
    console.log(message);
    return true; // 返回 true 将会阻止执行浏览器默认的错误处理函数
});


/** todo 捕获 Promise reject 异常 */
window.addEventListener('unhandledrejection', function(e){
    // 在使用 Promise 的时候，如果没有声明 catch 代码块，Promise 的异常会被抛出。
    // 只能通过这个方法或者 window.onunhandledrejection 才能捕获到该异常
});


/** todo Promise 异常处理 demo */
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('congratulation succeed');
        reject(new Error('.... error'));
    }, 300);
});
promise.then(function(successValue) {
    console.log(value);
}, function(failureReason){

}).finally(function(obj){
}).catch(function(error){
});


Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
});
Promise.race([promise1, promise2]).then(function(value) {
    console.log(value);
    // Both resolve, but promise2 is faster
});


/** todo 捕获 同步代码异常 */
try{

} catch(error){

}

/** todo 解决 跨域 JS 报错只显示 Script Error 的问题
 * 方案：劫持(hijack)原生方法
 * */
const NATIVE_ADD_EVENT_LISTENER = EventTarget.prototype.addEventListener;   // 首先保存原生的添加事件监听的方法
EventTarget.prototype.addEventListener = function (type, func, options) {   // 重写原生方法。
    const hijackFunction = function (...args) { // 将回调函数包裹一层try catch
        try {
            return func.apply(this, args);
        } catch (e) {
            const errorObj = {
                error_name: e.name || '',
                error_msg: e.message || '',
                error_stack: e.stack || (e.error && e.error.stack),
                error_native: e,
            };
            // 接下来可以将errorObj统一进行处理。
            throw e; // 重新 throw 出来异常的时候，执行的是同域代码，所以 window.onerror 捕获的时候不会丢失堆栈信息；
        }
    };
    return NATIVE_ADD_EVENT_LISTENER.call(this, type, hijackFunction, options); // 调用原生的方法，保证addEventListener正确执行
};


/** todo 自定义异常类型 */
function KaseiError(message){
    this.name = 'KaseiError';
    this.message = message ;
    this.stack = (new Error()).stack;
}
KaseiError.prototype = Object.create(Error.prototype);
KaseiError.prototype.constructor = KaseiError;








