define(['lib/underscore'],function(underscore) {
	var obj = {
		name: 'tom',
		age: '12',
		sex: '男'	
	};
	var t = _.template("<p>hello: <%= '"+obj.name+"' %></p>");
	console.log(t(obj)); 
	return{
		add: function(a,b){
			console.log(a+b);
		},
		del: function(){
			console.log(a-b);
		}
	}

	
});
 