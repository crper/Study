"use strict"
/**
 *
方法	描述
exec	一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）。
test	一个在字符串中测试是否匹配的RegExp方法，它返回true或false。
match	一个在字符串中执行查找匹配的RegExp方法，它返回一个数组或者在未匹配到时返回null。
search	一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。
replace	一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。
split	一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法。
 */

//JS正则声明
var myRe = /aa/g;
var returnArr = myRe.exec( "abcdaaeeaaeejlkerioajlafafdsfaa" );
for( var i = 0; i < returnArr.length; i++ ) {
	document.write( returnArr[ i ] + "<br>" );
}

var myRe = /d(b+)d/g;
var myArray = myRe.exec( "cdbbdbsbz" );
document.write( "The value of lastIndex is " + myRe.lastIndex + "<br>" );
document.write( "The value of source is " + myRe.source + "<br>" );
document.write( "The value of flags is " + myRe.flags + "<br>" );


var re = /(\w+)\s(\w+)/; //匹配一次或者多次[A-Za-z_]+匹配空格+匹配一次或者多次[A-Za-z_]
var str = "John Smith";
var newstr = str.replace( re, "$2, $1" ); //Smith John;
document.write( newstr + "<br>" );


var re = /\w+\s/g; // 匹配一次或者多次[A-Za-z_]+匹配空格 .在全局下搜索
var str = "fee fi fo fum";
var myArray = str.match( re ); //match方法
document.write( myArray );


var pattern = /\s*;\s*/;
var nameList = names.split( pattern ); //字符串切割方法调用正则
