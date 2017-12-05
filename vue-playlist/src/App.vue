<!-- 1.模板：html解构 -->
<template>
  <div id="app">
    <app-header v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
//局部注册组件
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  data(){
    return {
      //title: "这是我的第一个Vue脚手架项目！"
      users:[
        {name:"Henry",position:"web开发",show:false},
        {name:"Henry",position:"web开发",show:false},
        {name:"Henry",position:"web开发",show:false},
        {name:"Henry",position:"web开发",show:false},
        {name:"Henry",position:"web开发",show:false},
        {name:"Henry",position:"web开发",show:false},
        {name:"Henry",position:"web开发",show:false},
        {name:"Henry",position:"web开发",show:false},
        {name:"Henry",position:"web开发",show:false},
        {name:"Henry",position:"web开发",show:false},
        {name:"Henry",position:"web开发",show:false}
      ],
      title:"传递的是一个值，（number string boolean）"
    }
  },
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>

<!-- 3.样式：解决样式 -->
<style>
h1{
  color:green;
}
</style>
