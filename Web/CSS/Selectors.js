function cssSelectors(){
    /* Simple Selector */
    document.querySelectorAll('*');                     // 通用、万能选择器：选择所有元素
    document.querySelectorAll('#id');                   // 选择所有id="firstname"的元素
    document.querySelectorAll('.className');            // 选择所有class="intro"的元素
    document.querySelectorAll('p');                     // 选择所有 <p> 元素

    /* Attribute Selector */
    document.querySelectorAll('[attr]');                // 选择所有带有 attr 属性的元素
    document.querySelectorAll('[attr=val]');            // 选择所有 attr 属性值为 val 的元素
    document.querySelectorAll('[attr*=val]');           // 选择所有 attr 属性值包含 val 字符串的元素
    document.querySelectorAll('[attr~=val]');           // 选择所有 attr 属性值包含 val 字符串的元素，仅选择空白符分隔的，比如 <div attr="val1 val2 val3">
    document.querySelectorAll('[attr^=val]');           // 选择所有 attr 属性值以 val 字符串开头的元素
    document.querySelectorAll('[attr$=val]');           // 选择所有 attr 属性值以 val 字符串结尾的元素
    document.querySelectorAll('[attr|=val]');           // 选择所有 attr 属性值以 val 字符串开头的元素

    /* Combination and Multiple Selector */
    document.querySelectorAll('div , p');               // 选择所有 <div> 和 <p> 元素
    document.querySelectorAll('div   p');               // 选择所有 <div> 元素里面的所有 <p> 元素
    document.querySelectorAll('div > p');               // 选择所有 <div> 元素直接子元素为 <p> 的所有元素
    document.querySelectorAll('div ~ p');               // 选择所有 <div> 元素后面的所有兄弟 <p> 元素
    document.querySelectorAll('div + p');               // 选择所有 <div> 元素下一个兄弟 <p> 元素

    /* Pseudo Element Selector */
    document.querySelectorAll('div::after');                //
    document.querySelectorAll('div::before');               //
    document.querySelectorAll('div::first-letter');         //
    document.querySelectorAll('div::first-line');           //
    document.querySelectorAll('div::selection');            //
    document.querySelectorAll('div::backdrop');             //

    /* Pseudo Class Selector */
    document.querySelectorAll('div:matches(selector)');     // 选择所有符合 selector 的 <div> 元素
    document.querySelectorAll('div:not(selector)');         // 选择所有不符合 selector 的 <div> 元素
    document.querySelectorAll('div:nth-child(4n+1)');       // 选择 div 元素中直接子元素位置符合 4n+1 格式的元素， odd 奇数位；event 偶数位
    document.querySelectorAll('div:nth-of-type(4n+1)');     // 选择位置符合 4n+1 格式的 <div> 元素， odd 奇数位；event 偶数位
}
