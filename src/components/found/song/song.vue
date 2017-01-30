<template>
    <div class="found-song-list">
        <div class="song-title">
          <h3>
            <span class="song-title-flag">全部歌单</span>
            <a class="song-menu" id="cateToggleLink">
              <i>选择分类<em class="song-em-icn"></em></i>
            </a>
          </h3>
        </div>
        <div class="song-best">
          <div class="song-best-pic">
            <img class="song-best-pic-img" src="http://p4.music.126.net/PJtPH8L_fvyRpy9Rr3W1Vg==/109951162849467784.jpg?param=140y140" />
          </div>
          <div class="song-best-des">
            <p>
              <span class="song-u-icon"></span>
              <span>精品歌单</span>
            </p>
            <p>
              <span class="song-f-c4">【古风戏腔】戏子入画，一生天涯</span>
            </p>
          </div>
          <div class="song-best-more">
            >
          </div>
        </div>
      <div class="song-list-category">
        <ul class="song-list-category-ul">
          <li>
            <div class="song-u-cover">
              <img class="j-flag" src="http://p4.music.126.net/wBY4Xk93j_TIG_gV7qkTGw==/109951162851250962.jpg?param=140y140"></img>
              <a title="|春晚盘点|那些惊艳时光的对唱---" class="msk"></a>
            </div>
            <div class="song-u-bottom">
              <a class="icon-play" title="播放" href=""></a>
              <span class="icon-headset"></span>
              <span class="nb">69185</span>
            </div>
            <p class="dec">
              <a title="|春晚盘点|那些惊艳时光的对唱---" class="dec-title">|春晚盘点|那些惊艳时光的对唱---</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default{
    name: 'songList',
    data () {
        return {}
    },
    components: {

    },
    methods:{

    }

}
</script>

<style>
.found-song-list{
    width: 100%;
    height: 100%;
}

.song-menu{
  margin-right: 10px;
}

.song-title{
  width: 100%;
  height: 5%;
}

.song-title-flag{
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}

.song-best{
  margin-top:2px;
  width:100%;
  height: 10%;
}

.song-best-pic{
  float: left;
  width:80px;
  height: 80px;
}

.song-best-pic-img{
  width: 100%;
  height: 100%;
}
.song-u-icon{
  margin-left: 5px;
  width: 25px;
  height: 25px;
  float:left;
  background: url("../../../assets/images/found/best.png") no-repeat;
  background-size: contain;
}
.song-best-des{
  float:left;
  width: 60%;
  height: 100%;
}
.song-f-c4{
  margin-left: 5px;
  font-size: 12px;
}
.song-best-more{
  float:left;
  width: 10%;
  height: 100%;
  text-align: center;
}

.song-list-category{
  margin-top: 10px;
  width: 100%;
  height: 70%;
}

.song-list-category-ul{
  width: 100%;
  height: 100%;
}

.song-list-category ul{
  display: block;
  list-style-type: disc;
  margin-left: -40px;
}
.song-list-category-ul li {
  float: left;
  display: inline-block;
  overflow: hidden;
  padding: 0 0 0px 0px;
  line-height: 1.4;
}

.song-u-cover{
  width: 45%;
  height: 40px;
}

.song-u-bottom{
  height: 5%;
  margin-bottom: -10px;
}
</style>
