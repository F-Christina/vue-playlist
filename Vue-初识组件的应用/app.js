Vue.component("greeting",{
	template:`
		<p>
			{{name}}:大家好，给大家介绍一下我的蓝朋友@江辰
			<button v-on:click="changeName">改名</button>
		</p>

		`,
	data:function (){
		return {
			name:"陈小希"
		}
	},
	methods:{
		changeName:function (){
			this.name = "浅浅"
		}
	}
})



new Vue({
	el:"#vue-app-one",
});

new Vue({
	el:"#vue-app-two",
});

