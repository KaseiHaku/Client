/** todo file download by ajax
 * @param downloadUrl 文件上传，后端处理代码 url 路径
 * @param formdata 一个 FormData 类型的参数
 * */
function downloadByAjax(downloadUrl, formdata){

    /** 创建 XMLHttpRequest 对象，并配置好属性及监听事件 */
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';  // values = ['text', 'json', 'document', 'blob', 'arraybuffer']

    xhr.addEventListener('load', function(event){
        let strHeaderVal = this.getResponseHeader('content-disposition');
        let regexp = new RegExp('(?<=filename\\=).*$', 'i');
        let matchAry = strHeaderVal.match(regexp);
        let fileName = 'DownloadByAjax';
        if (matchAry !== null) {
            fileName = matchAry[0];
        }


        let blob = xhr.response;
        let str = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = str;
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
    });

    xhr.open('post', uploadUrl, true);
    xhr.send(formdata);
}

