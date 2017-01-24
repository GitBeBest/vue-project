<template>
    <div class="found-body">
        <div class="head-nav">
            <HeadNav v-on:message="updateStatus"></HeadNav>
        </div>
        <FoundRecommend v-if="status == 0"></FoundRecommend>
        <FoundSong v-if="status == 1"></FoundSong>
        <FoundFm v-if="status == 2"></FoundFm>
        <FoundRank v-if="status == 3"></FoundRank>

    </div>
</template>

<script>
import HeadNav from './head_nav.vue'
import FoundRecommend from './recommend/recommend.vue'
import FoundSong from './song/song.vue'
import FoundFm from './fm/fm.vue'
import FoundRank from './rank/rank.vue'

export default{
  name: 'found-body',
  data () {
    return {
      status: 0
    }
  },
  components: {
    HeadNav,
    FoundRecommend,
    FoundSong,
    FoundFm,
    FoundRank
  },
  methods: {
      updateStatus: function (status){
          this.status = status
      }
  },
  mounted () {

  }
}
</script>
<style>
.head-nav{
    height: 25px;
    width: 100%;
    background-color: #e5e8e8;
}
.head-banner{
    height: 20%;
    width: 100%;
    background-color: #e5e8e8;
}
.found-recommend{
    height: 20%;
    width: 100%;
    margin-top: 10px;
    background-color: #e5e8e8;
}
.found-list{
    margin-top: 10px;
    height: 40%;
    width: 100%;
    background-color: #e5e8e8;
}
.found-tip{
    margin-top: 10px;
    height: 5%;
    width: 100%;
    background-color: #e5e8e8;
}
</style>