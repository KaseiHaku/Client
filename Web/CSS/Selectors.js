/**
 * universal selector 
 *    < element selector == pseudo-element selector 
 *    < class selector   == pseudo-classes selector  == attribute selector        
 *    < id selector
 *    < inline 
 *
 * Combination 选择器优先级:
 *    Child(>) > Adjacent sibling(+) > General Sibling(~) > Descendant Selector(space)
 *
 * 当 specificity 相同时，后定义的生效
 *
 * @doc {选择器 specificity(优先级) } https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity
 * */
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

    /* Combination and Multiple Selector 
     * @doc https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator
     * */
    document.querySelectorAll('div , p');               // 选择所有 <div> 和/或 <p> 元素
    document.querySelectorAll('div.clazz');             // 选择所有 <div> 且 class 有 .clazz 的元素
    document.querySelectorAll('div   p');               // 选择所有 <div> 元素里面的所有 <p> 元素
    document.querySelectorAll('div > p');               // 选择所有 <div> 元素直接子元素为 <p> 的所有元素
    document.querySelectorAll('div ~ p');               // 选择所有 <div> 元素后面的所有兄弟 <p> 元素
    document.querySelectorAll('div + p');               // 选择所有 <div> 元素下一个兄弟 <p> 元素

    /* Pseudo Element Selector 
     * @doc https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line
     * */
    document.querySelectorAll('div::after');                // 匹配指定元素实际内容之前的元素。本例相当于则在 <div>AAA</div>， AAA 之后插入一个内容，内容由 css content 属性定义  
    document.querySelectorAll('div::before');               // <div>AAA</div>， AAA 之前插入一个内容，内容由 css content 属性定义  
    document.querySelectorAll('div::first-letter');         // 选择 div 中的第一个字符
    document.querySelectorAll('div::first-line');           // 选择 div 中的第一行
    document.querySelectorAll('div::selection');            // 匹配当前页面中被  鼠标拖动选中的内容

    /* Pseudo Class Selector 
     * @doc https://developer.mozilla.org/en-US/docs/Web/CSS/:has
     * */
    document.querySelectorAll(':root');                     // 相当于 document.querySelectorAll('html');
    document.querySelectorAll(':scope > p');                // :scope 代表当前执行 querySelectorAll() 方法的元素
    document.querySelectorAll('div:has(selector)');         // 选择所有包含 符合 selector 的元素 的 <div> 元素
    document.querySelectorAll('div:is(selector)');          // 选择所有符合 selector 的 <div> 元素
    document.querySelectorAll('div:where(selector)');       // 同 :is() 只是 :where() 的 specificity 比 元素选择器 还低
    document.querySelectorAll('div:not(selector)');         // 选择所有不符合 selector 的 <div> 元素    
    // 格式: (odd | even | <An+B> of selector) ; 其中: A=step; B=offset; n=从 0 开始的非负整数; 结果为 n=0,1,2,... 对应的结果
    document.querySelectorAll('div:nth-child(4n+1 of selector)');           // 选择 div 元素中直接子元素位置符合 4n+1 格式的元素， odd 奇数位；event 偶数位
    document.querySelectorAll('div:nth-last-child(-n+3 of selector)');      // 选择 div 元素中直接子元素位置符合 4n+1 格式的元素， odd 奇数位；event 偶数位
    // 格式: (odd | even | <An+B>) ; 其中: A=step; B=offset; n=从 0 开始的非负整数; 结果为 n=0,1,2,... 对应的结果
    document.querySelectorAll('div:nth-of-type(4n+1)');         // 选择位置符合 4n+1 格式的 <div> 元素， odd 奇数位；event 偶数位
    document.querySelectorAll('div:nth-last-of-type(-n+3)');    // 选择位置符合 4n+1 格式的 <div> 元素， odd 奇数位；event 偶数位
}
