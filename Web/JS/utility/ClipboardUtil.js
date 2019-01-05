/** todo paste 事件触发时获取剪贴板数据 */
function getClipboardData(event){
    var result = null; // 返回对象
    var clipboardData = null;
    if(window.clipboardData){
        clipboardData = event.clipboardData; // 兼容性获取 clipboardData 对象
    }

    if(window.event && window.clipboardData){
        /* 是 IE */
        var dataFormatAry = ["text","url","file","html","image"]; // 可用的数据格式列表
        result = clipboardData.getData(dataFormatAry[0]); // 从剪贴板获取指定格式的数据
    }

    /* 不是 IE */
    if(clipboardData!=null && clipboardData.items.length!=0){ // 如果剪贴板有内容
        var item = clipboardData.items[0]; // 获取第一个剪贴板内容
        if(item.kind=="file"){// 如果是文件
            if(item.type=="image/png"){// 如果是图片
                var file = item.getAsFile(); // 获取剪贴板中的文件
                if(!window.FileReader) {// 如果不支持 FileReader
                    alert("Not supported by your browser!");
                    return ;
                }

                var fileReader = new FileReader();
                fileReader.onload = function() { // 配置当文件读取完成时，触发的事件
                    console.log(fileReader.result);
                };
                fileReader.readAsDataURL(file);// 用于图片显示不需要传入后台，reader.result的结果是base64编码数据，直接放入img的src中即可
                var base64Str = fileReader.result;
                result =  base64Str;
            }
        }
        if (item.kind == "string") {// 如果是文件
            if(item.type=="text/plain"){// 如果是普通字符串
                item.getAsString(function(str){
                    result = str;
                });
            }
        }
    }
    return result;
}

/** todo Chrome 下复制事件处理函数
 */
function kaseiCopyEventChrome(event){
    event.preventDefault();
    event.stopPropagation();
    var selection = window.getSelection(); // 获取选中内容
    var copyText = null;

    if (window.clipboardData || event.clipboardData) { // 如果 Browser 支持 clipboardData 对象
        copyText = "KaseiHaku" + selection;
        event.clipboardData.setData ("Text", copyText);
        return false;
    } else {
        /** 思路：
         * 1. 新建一个隐藏 div
         * 2. 把当前选中的内容和自定义内容填充到 div 中
         * 3. 取消原来的选中，并选中 div 中的内容
         * 4. 删除 div
         * */
        copyText = "KaseiHaku" + selection;
        var newDiv = document.createElement('div');
        newDiv.style.position='absolute';
        newDiv.style.left='-99999px';
        HTMLBodyElement.appendChild(newDiv);
        newDiv.innerHTML = copyText;
        selection.selectAllChildren(newDiv);
        window.setTimeout(function() {
            HTMLBodyElement.removeChild(newDiv);
        },0);
    }
}


// copy or cut event
function copyOrCutEventHandler(e){

    // 1. 获取用户选中文本
    var userSelectContent = null;

    // 2. 对用户选中文本做处理
    userSelectContent += "====";

    // 3. 写入到系统剪贴板
    e.clipboardData.setData('text/plain', userSelectContent);
    e.clipboardData.setData('text/html', '<b>Hello, world!</b>');
    e.preventDefault();
}


