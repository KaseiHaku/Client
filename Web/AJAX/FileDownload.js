/** todo file download by ajax
 * @param downloadUrl 文件上传，后端处理代码 url 路径
 * @param twoDimensionalAry 一个二维数组 
 * */
function downloadByAjax(downloadUrl, twoDimensionalAry){

    /** 创建 XMLHttpRequest 对象，并配置好属性及监听事件 */
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';  // values = ['text', 'json', 'document', 'blob', 'arraybuffer']

    xhr.addEventListener('load', function(event){
        var strHeaderVal = this.getResponseHeader('content-disposition');
        var regexp = new RegExp('(?<=filename\\=).*$', 'i');
        var matchAry = strHeaderVal.match(regexp);
        var fileName = 'DownloadByAjax';
        if (matchAry !== null) {
            fileName = window.decodeURIComponent(matchAry[0]);
        }


        var blob = xhr.response;
        var str = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = str;
        link.download = fileName;
        link.click();
        document.body.removeChild(link); 
        window.URL.revokeObjectURL(link.href);
        unmask();
    });

    xhr.open('post', downloadUrl, true);
    xhr.setRequestHeader("Content-type","application/json; charset=UTF-8");
    xhr.send(JSON.stringify(json));
}

