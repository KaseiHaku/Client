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
            window.getComputedStyle(cssDemo, '::first-letter'); // pseudo-element
        </script>
    </div><hr/>
</div>
</body>
</html>
