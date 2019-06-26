/** todo 原生 ajax post 不带文件
 * @param params 请求参数，格式： key1=val1&ke2=val2  值必须先用 window.encodeURIComponent(val) 编码
 *
 * */
function nativeAjaxPostWithoutFile(url, params, async){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(event){
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
            // 此处如果返回的数据有多种类型，可以使用 Content-Type 头属性判断返回的是 text 还是 blob 还是 arraybuffer
        }   
    });
    xhr.addEventListener('error', function(event){
        //alert(false);
    });
    xhr.addEventListener('loadend', function(event){
        unmask();
    });


    xhr.open('post', url, async);
    xhr.responseType = 'text'; // values = ['text', 'json', 'document', 'blob', 'arraybuffer']
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');   // 常规 <form> 表单提交，后端使用 request.getParameter() 取参数
    xhr.setRequestHeader('Content-Type', 'multipart/form-data; charset=utf-8; boundary=--------kaseihaku'); // <form enctype="multipart/form-data"> 表单提交， 后端使用 ServletFileUpload 取参数
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');  // 表示未知二进制文件，后端使用 request.getInputStream() 取参数
    xhr.setRequestHeader('Content-Type', 'application/json'); // 表示时 JSON 字符串，后端使用 request.getInputStream(); 或 request.getReader();
    xhr.setRequestHeader('Content-Type', 'text/plain');  // 表示纯文本，后端使用 request.getReader();
    xhr.send(params);
}

/** todo 原生 ajax post 带附件
 * @param formdata FormData 类型的数据， Content-Type 必须是 multipart/form-data
 * @trap 后端要使用 ServletFileUpload 类去取参数，不能使用 request.getParameter() 取
 * */
function nativeAjaxPostWithoutFile(url, formdata, async){
    let xhr = new XMLHttpRequest();


    xhr.open('post', url, async);
    xhr.responseType = 'text';
    xhr.setRequestHeader('Content-Type', 'multipart/form-data; charset=utf-8; boundary=----------------kaseihaku');
    xhr.send(params);
}


/** todo 原生 ajax get 方法发送请求
 * @param url 请求地址
 * @param async 是否异步
 * */
function nativeAjaxGet(url, async){
    let xhr = new XMLHttpRequest();

    xhr.open('get', url, async);


}








/** todo 原生 AJAX 属性 方法 事件介绍
 * */
function nativeAjax(){
    let xhr = new XMLHttpRequest();

    /** properties */
    xhr.responseType = 'json';  // 设置返回值类型，如果返回值不符合格式，那么 xhr.response 的值为 null
    xhr.timeout = 60*1000;
    xhr.withCredentials = false; // 跨域请求时使用
    xhr.onreadystatechange = function(){};

    // readonly
    xhr.readyState;
    xhr.response;
    xhr.status;
    xhr.statusText;
    xhr.upload; // 返回一个 XMLHttpRequestUpload 实例，这个实例是用来表示 ajax 上传的进度，而 ajax 下载的进度在 XMLHttpRequest 实例本身中

    /** event */

    xhr.addEventListener('loadstart', function(){}, false);
    xhr.addEventListener('load', function(){}, false);
    xhr.addEventListener('loadend', function(){}, false);
    xhr.addEventListener('progress', function(){}, false);
    xhr.addEventListener('error', function(){}, false);
    xhr.addEventListener('abort', function(){}, false);
    xhr.addEventListener('timeout', function(){}, false);

    /** method */
    xhr.abort();
    xhr.getAllResponseHeaders();
    xhr.getResponseHeader("headerName");
    xhr.open();
    xhr.overrideMimeType();
    xhr.send();
    xhr.setRequestHeader("headerName", "headerValue");
}










