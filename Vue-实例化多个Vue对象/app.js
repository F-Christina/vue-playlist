var one = new Vue({
	el:"#vue-app-one",
	data:{
		title:"app one 的内容"
	},
	methods:{
		
	},
	computed:{
		greet:function (){
			return "Hello App One"
		}
	}
});

var two = new Vue({
	el:"#vue-app-two",
	data:{
		title:"app two 的内容"
	},
	methods:{
		changeTitle:function (){
			one.title = "已经改名了！"
		}
	},
	computed:{
		greet:function (){
			return "Hello App Two"
		}
	}
});


two.title = "app two 的 title也发生变化了！"