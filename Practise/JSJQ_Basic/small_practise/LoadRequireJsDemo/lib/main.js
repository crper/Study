require.config(
{
	baseUrl: "lib"
	, urlArgs: 'v=20150810'
	, paths:
	{

		// 数组定义加载模块文件,若是CDN引用不成功则加载本地JQ(推荐写法)
		jquery: [
 			'//cdn.bootcss.com/jquery/1.11.3/jquery.min'








			, 'lib/jquery-1.11.3.min'
				]

		// 第二种模块加载
		// 	require.config(
		// {
		// 	paths:
		// 	{　
		// 		"jquery": "lib/dep/jquery-1.11.3.min"
		//		"jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]  	
		// 	}
		// } )

	}
	, shim:
	{
		'main':
		{
			'dep': [ 'jquery' ]
		}
	}
} );

require( [ 'jquery' ], function ( $ ) {

} );
