<template>
    <footer class="footer">
        <div class="m-body-nav">
            <ul class="foot-nav">
                <li v-for="item in items">
                    <div class="foot-nav-icon">

                    </div>
                    <p class="foot-nav-title" v-bind:id="item.id" v-on:click="showPage(item.id)">
                        {{ item.name }}
                    </p>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui'
export default{
  name: 'MyFoot',
  data () {
    return {
      items: [
        {
           name: '发现音乐',
           id: '0',
           icon: '',
           actionUrl: '/found',
        },
        {
           name: '我的音乐',
           id: '1',
           icon: '',
           actionUrl: '/my-music',
        },
        {
           name: '朋友',
           id: '2',
           icon: '',
           actionUrl: '/my-friends'
        },
        {
           name: '帐号',
           id: '3',
           icon: '',
           actionUrl: '/my-account'
        }
      ],
      active_index: 0
    }
  },
  components: {
    Navbar,
    TabItem
  },
  props: {
    'showNav': {
      type: Boolean,
      default: true
    }
  },
  computed: {
    route () {
      return this.$route.path
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    showPage(index) {
        this.$router.push({path: this.items[index].actionUrl});
    }
  }
}
</script>

<style>
.footer {
    background-color: #fff;
    position: fixed;
    width: 100%;
    bottom: 0px;
    height: 50px;
    display: -webkit-box;
    padding-bottom: 7px;
    box-sizing: border-box;
    z-index: 10;
}
.m-body-nav{
    width: 100%;
}

.m-body-nav ul li{
    float: left;
    display: inline;
    width: 25%;
    height: 100%;
    text-align: center;
}
.container{
    position: fixed;
    width: 100%;
}

.fb-nav-header{
    position: fixed;
    width: 25%;
}
.footer nav {
    -webkit-box-flex: 1;
    text-align: center;
    color: #8a869e;
}
.footer .cur-page.nav{
    color: #ff4d64;
}
.nav-icon {
    width: 22px;
    height: 22px;
    margin: 0 auto;
}
.nav-icon img {
    width: 100%;
    height: 100%;
}
.nav-movie::after,
.nav-cinama::after,
.nav-me::after {
    padding-top: 2px;
    text-align: center;
    width: 30px;
    display: inline-block;
    font-size: 12px;
}
.nav-movie::after {
    content: "电影";
}
.nav-cinama::after {
    content: "影院";
}
.nav-me::after {
    content: "我的";
}
.go-back {
    background: #ff2c43;
}
.back {
    font-size: 30px;
    color: #fff;
    padding-left: 35px;
    margin-top: -4px;
    transform: scaleY(1.5);
}
</style>