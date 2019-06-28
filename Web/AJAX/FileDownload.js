/** todo file download by ajax
 * @param downloadUrl 文件上传，后端处理代码 url 路径
 * @param twoDimensionalAry 一个二维数组 
 * */
function downloadByAjax(downloadUrl, twoDimensionalAry){

    /** 创建 XMLHttpRequest 对象，并配置好属性及监听事件 */
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';  // values = ['text', 'json', 'document', 'blob', 'arraybuffer']

    xhr.addEventListener('load', function(e){
        let contentType = this.getResponseHeader('Content-Type');

        let blob = xhr.response;
        if(contentType.indexOf('application/octet-stream') != -1){
            let str = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            document.body.appendChild(a);
            a.href = str;
            a.download = fileName;
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(a.href);
        } else if(contentType.indexOf('application/json') != -1){
            let fileReader = new FileReader();
            fileReader.readAsText(blob);
            fileReader.addEventListener('load', function(e){
                let json = this.result;
                let obj = JSON.parse(json);

                /* any else code */
            });
        } else if(contentType.indexOf('text/plain') != -1){
            let fileReader = new FileReader();
            fileReader.readAsText(blob);
            fileReader.addEventListener('load', function(e){
                let plainText = this.result;
                /* any else code */
            });
        } else {
            throw new Error('unknown type of response data');
        }

    });
    xhr.addEventListener('error', function(event){
        // ajax error
    });
    xhr.addEventListener('loaded', function(e){
        // ajax finish
    });


    xhr.open('post', downloadUrl, true);
    xhr.setRequestHeader("Content-type","application/json; charset=UTF-8");
    xhr.send(JSON.stringify(twoDimensionalAry));
}

