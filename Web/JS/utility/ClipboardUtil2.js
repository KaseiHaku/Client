var pasteEventHandler = function(event){

        if(window.event) {// 如果 window.event 对象存在
            event = window.event;
        }
        if(event.stopPropagation){// 如果 event.stopPropagation 对象存在
            event.stopPropagation(); // 终止事件在传播过程的捕获、目标处理或冒泡阶段进一步传播。调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。
        }
        if(event.preventDefault){// 如果 event.preventDefault 对象存在
            event.preventDefault();// 设置浏览器不要执行与事件关联的默认动作
        }
        if(event.cancelBubble){
            event.cancelBubble = true; // 阻止事件冒泡，IE 低版本
        }
        if(event.returnValue){
            event.returnValue = false; //阻止浏览器默认事件，IE 低版本
        }


        if(window.event && window.clipboardData){
            // 如果是 IE
            var dataFormatAry = ["text","url","file","html","image"]; // 可用的数据格式列表
            var str = window.clipboardData.getData(dataFormatAry[0]); // 从剪贴板获取指定格式的数据

            // 取标识符 "fixedHandler" 当前所指对象的地址（注意已经被替换掉了），并执行其中的内容
            // 解释型语言（边编译边执行）的好处，可以在执行过程中替换标识符指向
            // Java 等编译型语言（先编译再执行）比较难搞
            pasteEventHandler(str);
            return false;// 1. 阻止浏览器默认行为 2. 阻止冒泡
        }


        /* 不是 IE */
        var clipboardData = event.clipboardData;
        if(clipboardData!=null && clipboardData.items.length!=0){ // 如果剪贴板有内容
            var item = clipboardData.items[0]; // 获取第一个剪贴板内容
            if(item.kind=="file"){// 如果是文件
                return false;
            }
            if (item.kind == "string") {// 如果是字符串
                item.getAsString(pasteEventHandler); // 此处如上
            }
        }
        return false;// 1. 阻止浏览器默认行为 2. 阻止冒泡
    };






    /** todo 粘贴事件内容预处理，
     * @param target 目标 DOM 对象
     * @param callback 回调函数，包含一个参数 str， str 值为剪贴板中的内容
     * @trap(坑) 1. 只支持字符串处理 2. 部分 IE 版本可能不支持 Ctrl+V 只支持右键粘贴 3. 浏览器默认粘贴动作失效需要自行重写
     * */
    function pasteEventHandlerEntry(target, callback){

        if(target.addEventListener) {//主流浏览器
            // 1. 给元素的 paste 事件绑定函数
            target.addEventListener("paste", pasteEventHandler, false); // 取标识符 "fixedHandler" 所指对象的地址
            // 2. 给元素的 Ctrl+V 绑定事件
            //target.addEventListener("keyup", fixedHandler);
        } else {
            target.attachEvent("onpaste", pasteEventHandler);
        }

        pasteEventHandler = function(str){ // 替换掉 标识符 "fixedHandler" 所指对象的地址，对已经添加到事件中的对象不影响

            return callback(str);
        };
    }


    function customFunc(str){
        alert(str + "==========");
        str += "==========";
        return str;
        //document.getElementById("d").setAttribute("value", str);
    }



    pasteEventHandlerEntry(document.getElementById("d"), customFunc);
