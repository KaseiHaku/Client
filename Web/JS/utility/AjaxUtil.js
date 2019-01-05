/** jquery ajax global settings */
jQuery.ajaxSetup({
    method:"POST", // 默认采用 post 方法
});

$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError){
    alert("The jQuery Ajax Encounter An Exception!");
});


/**
 * TODO Jquery Ajax Post Send Json Data to Server
 * */
function ajaxPostJson(url, obj, async, successFun, errorFun, beforeFun, finalFun){
    jQuery.ajax({
        async: async,  // false 取消异步
        url: url,
        method:"POST",
        data: JSON.stringify(obj),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        processData: false,
        beforeSend: beforeFun,
        success: successFun,
        error: errorFun,
        complete: finalFun
    });
}


/** jQuery Ajax 所有参数示例 */
function ajaxFullParam(){

    jQuery.ajax({
        accepts:{
            mycustomtype: 'application/x-some-custom-type' // 自定义数据类型
        },
        converters: {
            'text mycustomtype': function(result) { // 自定义数据类型的处理方式
                // Do Stuff
                return newresult;
            }
        },
        dataType: 'mycustomtype', // 表示数据类型
        async:true, // false 取消异步
        cache:true, // whether load data from browser cache when dataType is "script" or "jsonp"
        contents:{},
        contentType: "application/x-www-form-urlencoded; charset=utf8",// "application/json; charset=utf-8" 发送信息至服务器时内容编码类型。默认类型就是当前写的类型
        context:{},
        crossDomain: false,
        data:{},
        dataType:"html", // 预计服务器返回的数据类型：xml html script json jsonp
        global:true, // 是否开启 ajax 全局 event 监听
        headers:{},
        ifModified:false,
        isLocal:true,
        jsonp:"",
        method:"GET",
        mimeTpe: "",
        password:"",
        processData:true,
        scriptCharset:"",
        statusCode:{},
        timeout: 1000,
        traditional:true,
        type:"GET", // 跟 method 一样 1.9.0 之后请用 method
        url:"",
        username:"",
        xhrFields:{},

        xhr:function(){},
        dataFilter:function(data, type){},
        beforeSend:function(jqXHR, settings){},//发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
        complete:function(jqXHR, textStatus ){},// 请求完成后的回调函数，不管请求成功是否成功
        success:function(data, textStatus, jqXHR ){},
        error:function(jqXHR, textStatus, errorThrown ){},
        jsonpCallback:function(){},
    });

}