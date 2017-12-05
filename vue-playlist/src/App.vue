<!-- 1.模板：html解构 -->
<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/helloworld">Hello</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
//局部注册组件


export default {
  name: 'app',
  data(){
    return {
      
    }
  }
}
</script>

<!-- 3.样式：解决样式 -->
<style>
h1{
  color:green;
}
</style>
