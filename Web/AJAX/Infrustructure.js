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


