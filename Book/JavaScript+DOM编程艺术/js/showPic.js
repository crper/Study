function showPic(whichpic){
	// 获取超链接属性href ,只是指链接图片的属性
	var source = whichpic.getAttribute("href");

	// 或者占位图片的ID
	var placeholder = document.getElementById('placeholder');

	// 替换占位图片的属性,达到切换图片显示效果
	placeholder.setAttribute("src",source);

	// 获取图片标题属性
	var titletext = whichpic.getAttribute("title");

	//获取显示文档标题的段落ID
	var description_title = document.getElementById("description_title");

	//把标题赋值给段落从而达到替换显示
	description_title.firstChild.nodeValue = titletext;

	// 获取图片alt属性
	var titlecontent = whichpic.getAttribute("alt");

	//获取显示文档标题的段落ID
	var description_content = document.getElementById("description_content");

	//把标题赋值给段落从而达到替换显示
	description_content.firstChild.nodeValue = titlecontent;

}
