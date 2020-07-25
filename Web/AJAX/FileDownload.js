/**
 * file download by ajax
 * @param downloadUrl 文件上传，后端处理代码 url 路径
 * @param relativePathAry basic-file 模块文件相对路径
 * @param fileName 自定义下载文件名
 * */
function fileDownloadByAjax(downloadUrl, relativePathAry, fileName){
    /** 创建 XMLHttpRequest 对象，并配置好属性及监听事件 */
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';  // values = ['text', 'json', 'document', 'blob', 'arraybuffer']
    xhr.addEventListener('load', function(e){
        let contentType = this.getResponseHeader('Content-Type');

        let blob = xhr.response;
        if(contentType.indexOf('application/octet-stream') !== -1){
            let str = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            document.body.appendChild(a);
            a.href = str;

            // 需要后端设置 expose Content-Disposition 头，前端才能获取到
            let contentDisposition = this.getResponseHeader('Content-Disposition');
            let exec = contentDisposition !== null ? /(?<=filename=).*$/.exec(contentDisposition) : null;
            let serverFileName = exec !== null ? exec[0].replace(/"/g, '') : null;
            if(fileName === undefined || fileName === null || fileName.trim() === ''){
                if(serverFileName === undefined || serverFileName === null || serverFileName.trim() === ''){
                    fileName = 'fileDownloadByAjax';
                } else {
                    fileName = serverFileName;
                }
            }

            a.download = fileName;
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(a.href);
        } else if(contentType.indexOf('application/json') !== -1){
            let fileReader = new FileReader();
            fileReader.readAsText(blob);
            fileReader.addEventListener('load', function(e){
                let json = this.result;
                let obj = JSON.parse(json);

                /* any else code */
                alert(obj.msg);
            });
        } else if(contentType.indexOf('text/plain') !== -1){
            let fileReader = new FileReader();
            fileReader.readAsText(blob);
            fileReader.addEventListener('load', function(e){
                let plainText = this.result;
                /* any else code */
                alert(plainText);
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
    xhr.send(JSON.stringify(relativePathAry));
}
