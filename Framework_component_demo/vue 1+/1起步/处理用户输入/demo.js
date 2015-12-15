new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		// 使用的是原生JS的分离，反转和拼接三个函数实现字符串反转
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
})