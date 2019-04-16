/** todo 主要讲解 JS 操作 DOM(HTML)：
 * DOM 分为以下几种： 文档节点（#document）、元素节点（element）、属性节点（attribute）、文本节点（#text）、注释节点（comment）
 * */
/** JS 获取 DOM 对象（实例） */
let domObj = window.document.getElementById('ID');
let domObjs = window.document.getElementsByName('name');
let domObjs = window.document.getElementsByClassName('className');
let domObjs = window.document.getElementsByTagName('tagName');

let formDomObj = window.document.forms["formName"];
let domInForm = formDomObj['name']; // 获取表单中 name="name" 元素的对象，适用单个 input
let domsInForm = form1.elements["name"];// 获取表单中 name="name" 元素的对象数组，适用多个 input 组合的元素

let iframeDomObj = window.frames['iframeId']; // 获取 iframe 标签的 DOM 对象
let iframeWindow = window.document.getElementById("iframeId").contentWindow; // 父窗口获取 iframe 中的 window 对象，注意 html 中的 js 方法是在 window 对象下面的
let domInIframe = window.frames['iframeId'].document.getElementById('ID'); // 父窗口取 iframe 中的元素
let parentDomObj = window.parent.document.getElementById('ID'); // iframe 中获取 父窗口中的元素


/** JS 查看 DOM 对象的所有属性 */
window.console.dir(domObj);

/** JS 创建 DOM 对象 */
    /* todo 方法一 */
    document.write('<a href="http://www.baidu.com">直接写 html 代码<a>');

    /* todo 方法二 */
    var newElement = document.createElement("p");// 创建一个 p 标签
    var parentElement = document.getElementById();// 获取一个 element 作为新创建标签的父标签
    parentElement.appendChild(newElement);// 把新标签作为父标签的最后一个标签添加

    var locationElement = document.getElementById("");// 获取一个用于定位的标签
    parentElement.insertBefore(newElement, locationElement);// 在定位标签前面插入新标签

    var beReplacedElement = document.getElementById("");// 获取一个被替换的标签
    parentElement.replaceChild(newElement, beReplacedElement);// 用新标签替换老标签

    /* todo 方法三: 通过 new DOMParser().parseFromString(text,"text/xml"); */
    var str = "<book><title>Everyday Italian</title><author>Giada De Laurentiis</author><year>2005</year></book>";
    var parser = new DOMParser();
    var dom = parser.parseFromString(str,"text/xml");

    /* todo 方法四：通过 innerHTML 来解析 */
    var parent = document.getElementById("d");
    var str = "<div>html code<span> innerHTML</span></div>";
    parent.innerHTML = str;
    var domObjs = parent.childNodes;

/** JS 删除 DOM 对象 */
    let beRemovedElement = document.getElementById('ID');// 获取被删除的标签
    beRemovedElement.parentNode.removeChild(beRemovedElement);// 从该标签的父标签中删除该表签

/** JS 修改 DOM 对象：属性节点 */
     let attrDemo = document.getElementById("attributeDemo"); // 获取标签节点
    /* todo 属性查询 */
    let attrNodeValue = attrDemo.getAttribute("my");
    /* todo 属性添加及修改 */
    attrDemo.setAttribute("my", "sunck"); // 设置自定属性节点的值 
    /* todo 属性删除 */
    attrDemo.removeAttribute("other");
    /* todo 特殊属性操作 */
        /* class 属性 */
        document.getElementById("").classList.add(""); // 添加 class 属性中的一个值
        document.getElementById("").classList.remove(""); // 删除 class 属性中的一个值
        /* style 属性 */
        document.getElementById("p2").style.color="blue";    // 设置或获取 css 属性值


/** JS 修改 DOM 对象：文本节点 */
    var element = document.getElementById("");
    var textNode= document.createTextNode("文本节点");// 创建文本节点
    var textNode = element.childNodes[0]; // 文本节点没有获取函数或获取属性，只能通过遍历属性或者函数获取
    textNode.insertData(0, "出入的数据");// 表示从下标为 0 的位置开始插入数据
    textNode.nodeValue;// 获取文本值
    element.innerText;// 文本值
    element.innerHTML;// 标签内部的所有 html 代码
    
