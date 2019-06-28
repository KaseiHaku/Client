/** todo Native Class: 原生类
 * [Object, Function, Array, String, Boolean, Number, Date, RegExp, Error, SyntaxError]
 * */



/** todo JS Build-in Class: 内建类
 * [Global, Math, Arguments]
 * */
JSON.stringify(obj);
JSON.parse(json);

let blob = new Blob(new String('1234567890abcdefg'), {type: 'text/plain; charset=utf8', endings: 'transparent'});
let fileReader = new FileReader();
fileReader.readAsText(blob);
fileReader.onload = function(e){
    let content = this.result;
    console.log(content);
};


/** todo JS Parasitic Object: 宿主对象
 * [window, navigator, screen, history, location, event, document]
 * */

window.encodeURI();     // 该方法不会对 ASCII字母、数字、~!@#$&*()=:/,;?+' 等字符编码，适用场景： URI 路径中包含中文字符
window.encodeURIComponent();  // 该方法不会对 ASCII字母、数字、~!*()' 等字符编码，使用场景： URI 参数包含中文字符



// function Window(){}
// 坑：iframe 的 DOM 对象要用 name 属性取，不要用 id 属性取，用 id 取，有时候会出错
window.frames[0];  // 等价于 window.document.getElementsByTagName("iframe")[0].contentWindow  
window.frames["iframeName"];  // 等价于 window.document.getElementsByName("iframeName")[0].contentWindow



// function Console(){}
console.log();// 在控制台输出
console.dir(DOMObj); // 打印 DOM 对象的属性，非标准 API 根据宿主环境决定是否存在
console.dirxml(obj); // 打印一个 DOM 对象，或者一个 js 对象，非标准 API 根据宿主环境决定是否存在
console.trace(); // 在控制台打印执行到这条语句之前的函数调用栈
console.profile("label"); // 启动一个名为 label 的数据收集器，对之后执行的 js 进行数据收集  
console.profileEnd("label"); // 结束名为 label 的数据收集器
console.time("label"); // 启动一个名为 label 的计时器
console.timeEnd("label"); // 结束一个名为 label 的计时器
