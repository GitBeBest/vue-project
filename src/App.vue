<template>
  <div id="app">
        <transition
                appear
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"

                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                v-on:after-leave="afterLeave"
        >
        <div v-if="showWel" class="welcome">
          <div class="wel-center">
              遇到更好的自己
          </div>
        </div>
        </transition>
      <div v-if="!showWel" class="main main-init" ref="main">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data ()  {
    return {
        showWel: false,
    }
  },
  components: {
    // Hello
  },
  created : function() {
    this.showWel = true;
  },
  methods : {
    beforeEnter: function (el) {

    },
    enter: function (el, done) {
        el.className = el.className + ' ' + 'trans-wel';
        this.changeShow();
    },
    afterEnter: function (el) {
        console.log(666);
        this.changeShow();
    },
    beforeLeave: function (el) {
        //this.$refs.main.className = this.$refs.main.className + ' ' + 'main-init';
        this.$refs.main.className = 'main main-back';
    },
    leave: function (el) {
        console.log(444);
    },
    afterLeave: function (el) {
        //this.$refs.main.className = 'main main-back';
    },
    changeShow: function () {
        this.showWel = false;
        console.log(this.showWel);
    }  
  }
}
</script>

<style>
@import "https://unpkg.com/animate.css@3.5.1/animate.min.css"

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

.welcome, .main{
  background-color: red;
  height: 100%;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  overflow: hidden;
}


.wel-center{
  margin-top: 50%;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: lightblue;
  margin-top: 60px;
}

.trans-wel{
    animation: welturn 1s 1s;
    -moz-animation: welturn 1s 1s;
    -webkit-animation: welturn 1s 1s;
    -o-animation: welturn 1s 1s;
}

.main-back{
    animation: turn-back 3s 0.5s;
    -moz-animation: turn-back 3s 0.5s;
    -webkit-animation: turn-back 3s 0.5s;
    -o-animation: turn-back 3s 0.5s;
}

@keyframes welturn {
    from{

    }
    to{
        transform:rotateY(-60deg);
        -ms-transform: rotateY(-60deg);
        -moz-transform: rotateY(-60deg);
        -webkit-transform: rotateY(-60deg);
        -o-transform: rotateY(-60deg);
    }
}

.main-init{
    transform:rotateY(120deg);
    -ms-transform: rotateY(120deg);
    -moz-transform: rotateY(120deg);
    -webkit-transform: rotateY(120deg);
    -o-transform: rotateY(120deg);
}

@keyframes turn-back {
    0%{
        transform:rotateY(120deg);
        -ms-transform: rotateY(120deg);
        -moz-transform: rotateY(120deg);
        -webkit-transform: rotateY(120deg);
        -o-transform: rotateY(120deg);
    }
    25%{
        transform:rotateY(90deg);
        -ms-transform: rotateY(90deg);
        -moz-transform: rotateY(90deg);
        -webkit-transform: rotateY(90deg);
        -o-transform: rotateY(90deg);
    }
    50%{
        transform:rotateY(60deg);
        -ms-transform: rotateY(60deg);
        -moz-transform: rotateY(60deg);
        -webkit-transform: rotateY(60deg);
        -o-transform: rotateY(60deg);
    }
    100%{
        transform:rotateY(0deg);
        -ms-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -webkit-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
    }
}
</style>
