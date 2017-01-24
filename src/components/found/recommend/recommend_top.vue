<template>
    <div class="recommend-top">
        <ul class="f-re-top">
            <li v-for="item in items" >
                <div class="recommend-fm">
                    <img v-bind:src="item.imgUrl"/>
                </div>
                <p class="f-re-fm">{{ item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
  name: 'recommend',
  data () {
    return {
      items :[
        {
          title: '私人FM',
          imgUrl: 'http://p4.music.126.net/TkNqminF5jTCzk12Mf5Acg==/7744959906898786.jpg?param=100y100',
          action: ''
        },
        {
          title: '每日歌曲推荐',
          imgUrl: 'http://p4.music.126.net/LRtxrRfP3g6Gn3vyvWEXOw==/7808731581312441.jpg?param=100y100',
          action: ''
        },
        {
          title: '云音乐热歌榜',
          imgUrl: 'http://p3.music.126.net/LgoU8FreFrdLvSY3ZTFu5g==/2902710698975677.jpg?param=100y100',
          action: ''
        }
      ]
    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style>
.recommend-top {
    width: 100%;
    height: 100%;
}
.f-re-top{
    margin: 0;
    padding: 0;
    height: 100%;
    text-align: center;
    z-index: 100;
}
.f-re-top li{
    float: left;
    display: inline;
    width: 30%;
    height: 100%;
    padding-left: 3%;
}
.recommend-fm{
    height: 80%;
}

.recommend-fm img{
    height: 100%;
}
.f-re-fm{
    height: 20%;
    margin-top: 2px;
}
</style>