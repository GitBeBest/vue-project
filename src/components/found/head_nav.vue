<template>
    <div class="m-body-nav">
        <ul class="f-head-top">
            <li class="f-head-li" v-for="item in items" v-on:click="setIndex(item.index)">
                {{ item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default{
  name: 'found-header-nav',
  data () {
    return {
      items: [
          {
              title: '个性推荐',
              index: 0
          },
          {
              title: '歌单',
              index: 1
          },
          {
              title: '主播电台',
              index: 2
          },
          {
              title: '排行榜',
              index: 3
          }
      ],
      default_index: 0
    }
  },
  components: {

  },
  methods: {
    setIndex: function (index) {
        console.log(index)
        this.default_index = index
        this.$emit('message', index)
    },
    goRouter: function (index) {
      switch (index) {
        case 1:
          console.log(1)
          break
        case 2:
          console.log(2)
          break
        case 3:
          console.log(3)
          break
        case 4:
          console.log(4)
          break
      }
    }
  }
}
</script>

<style>
.m-body{
    width: 100%;
    height: 100%;
}

.container{
    width: 100%;
    height: 25px;
}
.fb-nav-header{
    width: 200px;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
}
.mint-tab-item {
    padding: 12px 0 !important;
}
.mint-tab-item-label {
    font-size: 16px !important;
}

.f-head-li{

}
</style>