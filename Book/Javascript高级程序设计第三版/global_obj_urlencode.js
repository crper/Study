var url =  "https:www.baidu.com / testffile.html / #test";

//除了空格之外其他字符原封不动,空格被替换成%20
console.log(encodeURI(url));


//会替换所有非字母数字字符为编码
console.log(encodeURIComponent(url));



var url1 ="https%3Awww.baidu.com%20%2F%20testffile.html%20%2F%20%23test"

//仅将%20还原成空格
console.log(decodeURI(url1));

//解码任何特殊字符编码
console.log(decodeURIComponent(url1));