/************************ JavaScript Native Class *****************************/
// function Object(){}

// function Function(){}

// function Array(){}
var ary = new Array();
ary.length; // 返回当前数组的长度
ary.concat(ary1, ary2, ary3);// 连接多个数组
ary.join(","); // 把数据转化成字符串，各元素间用 ',' 分隔
ary.push("ad", "cd", "ef"); // 在数组末尾添加
ary.pop(); // 弹出数组最后一个对象
ary.reverse(); // 反转数组顺序
ary.shift(); // 删除并返回数组第一个元素
ary.unshift("a","b","c");// 向数组头部添加一个或多个元素
ary.slice(-1,-6); // 裁剪数组，返回一个裁剪后的数组
ary.sort(function(a,b){ 
    // 如果没有传入 排序函数 那么 按字母排序  
    if(a>b){return -1};// 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
    if(a=b){return 0};// 若 a 等于 b，则返回 0。
    if(a<b){return 1};// 若 a 大于 b，则返回一个大于 0 的值。   
});
ary.splice(position, length, "a","b"); // 从指定位置开始，删除指定长度的元素，并添加元素 a b
ary.toString();// 转换成 字符串





// function String(){}
"kasei".length; // 返回当前字符串的长度
"kasei".charAt(0); // 返回索引为 0 位置上的字符
"kasei".concat("ab", "cd", "ef"); // 连接字符串
"kasei".endsWith("sei"); // 判断当前字符串是否以指定字符串结尾
"kasei".startWith("ka"); // 判断当前字符串是否以指定字符串开头
"kasei".includes("se"); // 判断当前字符串是否包含指定字符串
"kasei".indexOf("se"); // 返回指定字符串在当前字符串第一次出现的位置索引值，如果不存在则返回 -1
"kasei".lastIndexOf("se"); // 返回指定字符串在当前字符串最后一次出现的位置索引值，如果不存在则返回 -1
"kasei".padEnd(9, "12345"); // 末尾填充字符串，9 为填充后的总长度
"kasei".padStart(9, "12345"); // 首部填充字符串，9 为填充后的总长度
"kasei".repeat(2); // 返回当前字符串重复 2 次后的字符串
"kasei".slice(1,3); // 根据索引位置裁剪当前字符串
"kasei".split("fd"); // 根据指定字符串分割当前字符串
"kasei".substr(2, 3); // 从索引 2 的位置，截取 3 个字符
"kasei".toLowerCase(); // 变小写
"kasei".toUpperCase(); // 变大写
"kasei".toString(); // 没变，本来就是字符串
"kasei".trim(); // 取出收尾空白字符
"kasei".valueOf();

// 能使用 RegExp 的 String 对象的函数
"kasei".search(regexp); // 返回字符串中，与 regexp 匹配的子串的起始位置
"kasei".match(regexp); // 判断当前字符串是否跟指定的正则表达式匹配,返回一个数组，该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式（小括号里面的）匹配的文本。
"kasei".replace(regexp, "replace"); // 用指定字符串替换匹配的字符串
"kasei".split(regexp);// 根据指定字符串分割当前字符串






window.encodeURI();     // 该方法不会对 ASCII字母、数字、~!@#$&*()=:/,;?+' 等字符编码，适用场景： URI 路径中包含中文字符
window.encodeURIComponent();  // 该方法不会对 ASCII字母、数字、~!*()' 等字符编码，使用场景： URI 参数包含中文字符
JSON.stringify(obj);
JSON.parse(json);


// function Boolean(){}

// function Number(){}
Number.parseInt(str);
Number.parseFloat(str);
Number.isNaN(str); // 判断 param 是否是 NaN

// function Date(){}
new Date("2012/12/25 20:11:11");  // 只能是这种格式的时间才能转换成 Date 对象





// function RegExp(){}
// 语法：/模式串/修饰符;
// 修饰符解释：
// g 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
// i 表示对大小写不敏感
// m 表示多行匹配，即以每一行为一个匹配串


var regexp1 = /pattern/modifiers; // 创建一个正则表达式对象，字面量方式创建
var regexp2 = new RegExp(pattern, modifiers);// new 方式创建一个 正则表达式对象

var str = "kjerwn ediuh awdifuqe qweefiuohqweoi dqwefqef";
regexp2.exec(str);// exec() 方法用于检索字符串中的正则表达式的匹配。该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
regexp2.test(str);// test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。
regexp2.toString(); // 返回 正则表达式 的模式串



// function Error(){}
let error = new Error();            // JS 所有错误的接口
let error = new EvalError();        // 使用 eval(js) 执行 js 代码出错时的报错
let error = new RangeError();       // 当一个数值变量或参数的有效范围之外
let error = new ReferenceError();   // 引用无效
let error = new SyntaxError();      // 语法错误
let error = new TypeError();        // 变量或参数类型错误
let error = new URIError();         // encodeURI() or decodeURI() 两个方法的参数非法时



/************************ JavaScript Buildin Class ****************************/
// function Global(){}
// function Math(){}
// function Arguments(){} 


/************************ JavaScript Parasitic/Parasitifer Object ****************************/	
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


