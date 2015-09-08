( function ( $ ) {
	$( '#regForm' )
		.validate( {
			rules: { //验证规则
				username: {
					required: true,
					chrnum: true,
					rangelength: [ 5, 15 ]
				},
				email: {
					required: true,
					email: true
				},
				password: {
					required: true,
					minlength: 8,
					maxlength: 20
				},
				confirm_passowrd: {
					required: true,
					equalTo: '#regPassword'
				},
				mobilePhone: {
					required: true,
					mobile: true
				},
				birthday: {
					required: true,
					dateISO: true
				},
				zipcode: {
					required: true,
					zipCode: true
				},
				selectDemo: {
					required: true,
					selectNone: true
				}
			},
			messages: { //报错信息
				username: "请输入5~10位的字符",
				email: "请输入合法的邮箱地址!",
				password: "密码不能为空,支持数字字母(至少输入8位)",
				confirmPassowrd: "两次密码输入不一定,请重新输入"
			},
			errorElement: 'span', //错误信息包含块
			errorClass: 'help-block', //错误信息样式
			ignore: "", //忽略验证的元素


		} )
} )( jQuery )
