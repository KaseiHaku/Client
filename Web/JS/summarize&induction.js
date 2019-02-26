/** todo  */
    /**  */
        /* todo */
            /* */
                // todo
                    // 
/** todo JS 防止污染全局变量的方法：只创建一个全局变量 kasei，然后将所有自己的变量全放在 kasei 实例的属性中 */
    (function(){
        window.kasei = new Object();
        kasei.var1 = 1; // 所有需要暴露到全局的变量，都作为 kasei 的属性
        var aa = "fdfa"; // 该实例 aa 在当前匿名函数执行完之后就会被释放
    })();



/** todo HTML DOM 事件动态处理 */
    1. 直接覆盖原来的事件函数，js 解析器会取同名函数中的最后一个作为实际处理函数，具体哪个跟 Html 解析顺序有关

    2. 耦合绑定到 onclick 属性上的
        $('#id').attr('onclick', '');  // 设置没有事件函数
        $('#id').removeAttr("onclick"); // 消除事件
        $('#id').attr('href', 'javascript:void(0);'); // a 标签专用
        $('#id').attr('onclick', 'javascript:void(0);');  // a 标签专用
        $('#id').attr('onclick', 'func()');  // 配置触发函数

    3. 非耦合绑定，addEventListener() 和 removeEventListener()
        $('#id').on('click', function(){});  // 绑定事件
        $('#id').off('click', function(){});  // 解绑事件

    4. CSS 控制 DOM 元素不接收事件：
        $('#id').css('pointer-events', 'none');  // 控制当前标签不接收事件，有兼容性问题，注意事件冒泡
        $('#id').css('pointer-events', 'auto');  // 开启接收

 
 
