<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
    <VFoot></VFoot>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import VFoot from './components/footer.vue'
export default {
  name: 'app',
  components: {
    // Hello
    VFoot
  }
}
</script>

<style>
body{
  background-color: #f8f8ff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.nav{
  position: fixed;
  width: 108px;
  left: 40px;
}

.nav ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav ul li{
  width: 108px;
  height: 48px;
  line-height: 48px;
  border: 1px solid #dadada;
  text-align: center;
}

.nav ul li a{
  text-decoration: none;
}

.main{
  height: 100%;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
