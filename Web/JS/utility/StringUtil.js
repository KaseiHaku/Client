function StringUtil(){

    
    /** todo 根据指定的分隔符，切换单行和多行
     * @param str 原始字符串
     * @param delimiter 分隔符
     * @param toSingle true 转化成单行， false 转化成多行
     * */
    function toggleSingleMultiLine(str, delimiter, toSingle){
        if(str === void(0) || str === null || str === ''){
            return str;
        }
        
        if (toSingle) {
            var regexpSingle = new RegExp('\\s*' + delimiter+ '\\s*', "g");
            return str.replace(regexpSingle, delimiter);
        }
        var regexpMulti = new RegExp(delimiter, "g");
        return str.replace(regexpMulti, delimiter + '\n');
    }

    
}
