1. HTML DOM 事件动态处理
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

 
 
