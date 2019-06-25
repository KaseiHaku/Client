/** todo file upload by ajax
 * @param uploadUrl 文件上传，后端处理代码 url 路径
 * @param fileInput <input type="file"> dom 对象
 * @trap uploadUrl 后台处理代码返回值，必须是 json 字符串
 * */
function uploadByAjax(uploadUrl, fileInput, callback){
    let files = fileInput.filebox('files');

    let formdata = new FormData();
    formdata.append('file', files[0]);

    /** 创建 XMLHttpRequest 对象，并配置好属性及监听事件 */
    var xhr = new XMLHttpRequest();
    xhr.timeout = 60*1000;
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var jsonObj = JSON.parse(xhr.responseText);
            if(callback !== null || callback === ''){
                callback(jsonObj);
            }
        }
    }


    xhr.upload.addEventListener('progress', xhrUploadProgerssHandler, false);
    function xhrUploadProgerssHandler(event){
        if(event.lengthComputable){
            if(event.lengthComputable){
                let percent = event.loaded / event.total * 100;
                let str = percent.toFixed(2) + '%'; // 保留两位小数
            } else {
                console.log('event.lengthComputable === false 时，event.total == 0 所以无法计算');
            }
        }
    }

    xhr.open('post', uploadUrl, true);
    xhr.send(formdata);
}


