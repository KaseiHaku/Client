function openUrl(){
    var url = "";
    var name = "kasei"; // _blank, _parent, _self, _top
    var width = 100; // 新窗口的宽度
    var height = 100; // 新窗口的高度
    var left = 100; // 打开窗口距左屏幕边缘的距离
    var top = 100; // 距离窗口顶部的距离
    var location = "yes"; // 是否显示地址栏
    var menubar = "yes"; // 是否显示菜单栏
    var resizable = "yes"; // 是否可调整窗口大小
    var scrollbars = "yes"; // 是否显示滚动条
    var status = "yes"; // 是否要添加一个状态栏
    var titlebar = "yes"; // 是否显示标题栏
    var toolbar = "yes"; // 是否显示工具栏
    var windowFeatures = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",location=" + location + ",resizable=" + resizable ;
    window.open(url, name, windowFeatures);
}
