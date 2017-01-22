<template>
    <section class="body">
        <div class="m-body">
            <mt-navbar v-model="headNav" class="container">
                <mt-tab-item id="head-nav1" @click.native="goRouter(1)">新歌</mt-tab-item>
                <mt-tab-item id="head-nav2" @click.native="goRouter(2)">排行</mt-tab-item>
                <mt-tab-item id="head-nav3" @click.native="goRouter(3)">歌单</mt-tab-item>
                <mt-tab-item id="head-nav4" @click.native="goRouter(4)">歌手</mt-tab-item>
                <mt-tab-item id="head-nav5" @click.native="goRouter(5)">彩铃</mt-tab-item>
            </mt-navbar>
        </div>
    </section>
</template>

<script>
import { Navbar,TabItem } from 'mint-ui'
export default{
  name: 'found-header',
  data () {
    return {}
  },
  components: {
    Navbar,
    TabItem
  }
}
</script>