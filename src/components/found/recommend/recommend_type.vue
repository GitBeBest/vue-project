<template>
    <div class="recommend-type-list">
        <table class="re-type-table" v-for="item in items">
            <thead class="re-type-table-head">
                <tr>
                    <th class="tb-re-type-head-th" colspan="2">
                        <img v-bind:src="item.title_icon"/>
                        <span>{{ item.title }}</span>
                    </th>
                    <th class="tb-re-type-head-2">
                        <span>更多></span>
                    </th>
                </tr>
            </thead>
            <tbody class="re-type-table-body">
                <tr>
                    <th class="re-type-table-body-td" v-for="list in item.list">
                        <div class="recommend-img">
                            <img v-bind:src="list.imgUrl"/>
                        </div>
                        <p class="re-type-level">{{ list.describe }}</p>
                        <p class="re-type-level tit" v-if="list.singer">
                            {{ list.singer }}
                        </p>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default{
  name: 'recommend-type',
  data () {
    return {
      items: [
        {
          title: '推荐歌单',
          default_index: 0,
          order: 0,
          title_icon: '',
          list: [
            {
              describe: '『华语』百首精选，听歌如见你',
              imgUrl: 'http://p4.music.126.net/EvAWd64vdToY9tBGHhAVAQ==/3402988506661987.jpg?param=100y100',
              action: '',
            },
            {
              describe: '『重磅电音炸弹』慎入，易燃易爆',
              imgUrl: 'http://p3.music.126.net/vywze14vrU3sDDuydUj24Q==/3265549619786723.jpg?param=100y100',
              action: '',
            },
            {
              describe: '一首歌一部电视剧一段回忆90后',
              imgUrl: 'http://p4.music.126.net/QVG0-ci5Y1E194CB3KM1FA==/18701593278544917.jpg?param=100y100',
              action: '',
            },
          ]
        },
        {
            title: '独家放送',
            default_index: 1,
            order: 1,
            list: [
                {
                    describe: '音乐专栏当年是他为林忆莲千辛万苦找到李宗盛',
                    imgUrl: 'http://p4.music.126.net/5Zs51JS6cQzvQclW5u_J1g==/18832435162240436.jpg?param=100y100',
                    action: '',
                },
                {
                    describe: '探索频道第156期敲黑板这是一份春晚知识不完全问答',
                    imgUrl: 'http://p4.music.126.net/T04kp9tAkzmIkyi1TaLaew==/18770862511086525.jpg?param=100y100',
                    action: '',
                },
                {
                    describe: '音乐专栏《歌手》大赢家“黑马”迪玛希1234567',
                    imgUrl: 'http://p4.music.126.net/OaRVYzMHncHsC6Il1qRRiw==/18651015743690593.jpg?param=100y100',
                    action: '',
                },
            ]
        },
          {
              title: '最新音乐',
              default_index: 2,
              order: 2,
              list: [
                  {
                      describe: '唐韵',
                      singer: '谭晶',
                      imgUrl: 'http://p3.music.126.net/PKjYe_teT2CMAYw_B630tQ==/18500382650673780.jpg?param=100y100',
                      action: '',
                  },
                  {
                      describe: 'Yes?No?',
                      singer: '秀智',
                      imgUrl: 'http://p3.music.126.net/qSxyXrnXiPNVQ8YJD2XejA==/18720284976235092.jpg?param=100y100',
                      action: '',
                  },
                  {
                      describe: '一首听了就不挂科的歌',
                      singer: '网易云音乐',
                      imgUrl: 'http://p4.music.126.net/65MGFTwC0cOzRKKKHVTLaw==/18568552371584646.jpg?param=100y100',
                      action: '',
                  },
              ]
          },
          {
              title: '推荐MV',
              default_index: 3,
              order: 3,
              list: [
                  {
                      describe: '繁星之城',
                      singer: 'Emma',
                      imgUrl: 'http://p3.music.126.net/CMy7qbp4EhMv5YrorGNJ2A==/18522372883254956.jpg?param=140y140',
                      action: '',
                  },
                  {
                      describe: 'Castle on the Hill',
                      singer: 'Ed Sheeran',
                      imgUrl: 'http://p4.music.126.net/Kat1Gx1hOnWSB3JnOEqcfA==/18806046883221006.jpg?param=140y140',
                      action: '',
                  },
                  {
                      describe: '理性与感性作品音乐会',
                      singer: '李宗盛',
                      imgUrl: 'http://p3.music.126.net/b_sw6NSHk6xMKpPeYfm6Jg==/18703792301828696.jpg?param=140y140',
                      action: '',
                  },
              ]
          },
          {
              title: '主播电台',
              default_index: 4,
              order: 4,
              list: [
                  {
                      describe: '没有『过去』的人不懂深情',
                      imgUrl: 'http://p3.music.126.net/b_sw6NSHk6xMKpPeYfm6Jg==/18703792301828696.jpg?param=140y140',
                      action: '',
                  },
                  {
                      describe: '一期一会的年会中奖了吗',
                      imgUrl: 'http://p3.music.126.net/b_sw6NSHk6xMKpPeYfm6Jg==/18703792301828696.jpg?param=140y140',
                      action: '',
                  },
                  {
                      describe: '《为你我受冷风吹》',
                      imgUrl: 'http://p4.music.126.net/JfmCbT5Jzu91GCWyiDh40Q==/1364493951594994.jpg?param=140y140',
                      action: '',
                  },
              ]
          },
      ]
    }
  },
  methods: {
      // 自定义排序
      setDisplayOrder : function(orders) {

      },
      // 重置默认值
      resetDefault: function() {

      }
  }
}
</script>


<style>
.recommend-type-list{
    width: 100%;
    height: 100%;
}
.re-type-table{
    width: 100%;
}

.re-type-table-head{
    width: 100%;
}

.re-type-table-body{
    width: 100%;
}
.tb-re-type-head-th{
    width: 66%;
}
.tb-re-type-head-2{
    width: 33%;
}

.re-type-table-body-td{
    width: 33%;
}
.re-type-level{
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
}

.recommend-img img{
    display: block;
    margin-top: 1px;
    width: 100%;
    height: 100%;
}

.recommend-img{
    width: 100%;
    margin-top: 1px;
}
.tit{
    color: #666;
    margin-top: -10px;
}
</style>