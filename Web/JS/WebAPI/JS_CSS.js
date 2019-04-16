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
        </script>
    </div><hr/>
</div>
</body>
</html>
