//实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		a:0,
		b:0,
		age:20
	},
	methods:{
		// addToA: function (){
		//  console.log("add to a");
		// 	return this.a + this.age;
		// },
		// addToB: function (){
		//  console.log("add to b");
		// 	return this.b + this.age;
		// }
	},
	computed:{
		addToA: function (){
			console.log("add to a");
			return this.a + this.age;
		},
		addToB: function (){
			console.log("add to b");
			return this.b + this.age;
		}
	}
});

/*
* 耗时，搜索是使用computed属性，来优化当前项目
*/