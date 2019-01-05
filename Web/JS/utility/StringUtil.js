function StrUtil(){

    /** todo 去除字符串结尾的逗号',' '，'不管是中文逗号还是英文逗号
     *
     **/
    this.trimEndComma(str){
        if(str == null || str == ""){
            return str; 
        }
        var regExp = new RegExp("[,，]+$");
        var index = null;
        if((index = str.search(regExp)) == -1){
            return str;
        }
        return str.substring(0, index);
    }
}
