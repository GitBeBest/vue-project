<template>
    <div class="found-body">
        <div class="head-nav">
            <HeadNav v-on:message="updateStatus"></HeadNav>
        </div>
        <div v-if="status === 1">
            <FoundSong></FoundSong>
        </div>
        <div v-else-if="status === 2">
            <FoundFm></FoundFm>
        </div>
        <div v-else-if="status === 3">
            <FoundRank></FoundRank>
        </div>
        <div v-else>
            <FoundRecommend></FoundRecommend>
        </div>
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
</style>