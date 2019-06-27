"kasei".length; // 返回当前字符串的长度
"kasei".charAt(0); // 返回索引为 0 位置上的字符
"kasei".concat("ab", "cd", "ef"); // 连接字符串
"kasei".endsWith("sei"); // 判断当前字符串是否以指定字符串结尾
"kasei".startWith("ka"); // 判断当前字符串是否以指定字符串开头
"kasei".includes("se"); // 判断当前字符串是否包含指定字符串
"kasei".indexOf("se"); // 返回指定字符串在当前字符串第一次出现的位置索引值，如果不存在则返回 -1
"kasei".lastIndexOf("se"); // 返回指定字符串在当前字符串最后一次出现的位置索引值，如果不存在则返回 -1
"kasei".padEnd(9, "12345"); // 末尾填充字符串，9 为填充后的总长度
"kasei".padStart(9, "12345"); // 首部填充字符串，9 为填充后的总长度
"kasei".repeat(2); // 返回当前字符串重复 2 次后的字符串
"kasei".slice(1,3); // 根据索引位置裁剪当前字符串
"kasei".split("fd"); // 根据指定字符串分割当前字符串
"kasei".substr(2, 3); // 从索引 2 的位置，截取 3 个字符
"kasei".toLowerCase(); // 变小写
"kasei".toUpperCase(); // 变大写
"kasei".toString(); // 没变，本来就是字符串
"kasei".trim(); // 取出收尾空白字符
"kasei".valueOf();

// 能使用 RegExp 的 String 对象的函数
"kasei".search(regexp); // 返回字符串中，与 regexp 匹配的子串的起始位置
"kasei".match(regexp); // 判断当前字符串是否跟指定的正则表达式匹配,返回一个数组，该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式（小括号里面的）匹配的文本。
"kasei".replace(regexp, "replace"); // 用指定字符串替换匹配的字符串
"kasei".split(regexp);// 根据指定字符串分割当前字符串