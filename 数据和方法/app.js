//实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		name:"Christina",
		job:"web开发"
	},
	methods:{
		greet: function(time){
			return 'Good '+ time + " " + this.name +'!'
		}
	}
});

/*
* el: element需要获取的元素，一定是html中的根容器元素
* data: 用于数据的存储
* methods: 用于存储各种方法
*/