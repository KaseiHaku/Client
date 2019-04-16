<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JS_CSS</title>
</head>
<body>
<div id="root">
    <div>
        <h3>查询 Element CSS 属性</h3>
        <div id="cssDemo"></div>
        <script>
            let cssDemo = document.getElementById('cssDemo');
            console.log(window.getComputedStyle(cssDemo, '::first-letter')); // pseudo-element, 查看当前元素，当前的所有 CSS 属性及值


            console.log(cssDemo.style); // 猜的，查看当前元素，声明的所有 CSS 属性及值
        </script>
    </div><hr/>
    <div>
        <h3>设置 Element CSS 属性</h3>
        <div id="cssSetDemo"></div>
        <script>
            let cssSetDemo = document.getElementById('cssSetDemo');
            cssSetDemo.style.width = '400px'; // 设置宽度
            cssSetDemo.style.cssText = 'width:400px; height:20px;'; // 覆盖原来的 CSS 样式
            cssSetDemo.setAttribute('style', 'width:400px; height:20px;'); // 跟上面一样是覆盖

            cssSetDemo.style.getPropertyValue('width');
            cssSetDemo.style.setProperty('width', '100px', null);
            cssSetDemo.style.removeProperty('width'); // 删除 CSS 样式，返回被删除的值


        </script>
    </div><hr/>
</div>
</body>
</html>
